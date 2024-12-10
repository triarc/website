import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { ChatService } from './chat.service'
import { Block, KnownBlock } from '@slack/web-api'
import { GStorageService } from './gStorage.service'
import { Client } from '@microsoft/microsoft-graph-client'
import { ClientSecretCredential } from '@azure/identity'
import { TokenCredentialAuthenticationProvider } from '@microsoft/microsoft-graph-client/lib/src/authentication/azureTokenCredentials'
import { Message } from '@microsoft/microsoft-graph-types'

export class ApplicationFormDto {
  @IsString()
  @IsNotEmpty()
  jobListing: string
  @IsString()
  @IsNotEmpty()
  firstName: string
  @IsString()
  @IsNotEmpty()
  lastName: string
  @IsEmail()
  @IsNotEmpty()
  email: string
  @IsString()
  @IsNotEmpty()
  lohn: string
  @IsOptional()
  @IsString()
  phone?: string
  @IsOptional()
  @IsString()
  message?: string
  @IsOptional()
  @IsString()
  arbeitgeber?: string
}
export interface MailtoTemplate {
  template: string
  buttonText: string
}

export interface GitlabLink {
  title: string
  url: string
}

const gCloudBaseURL = 'https://storage.cloud.google.com/'

@Injectable()
export class EmailService {
  client: Client
  private readonly logger = new Logger(EmailService.name, { timestamp: true })

  constructor(
    private config: ConfigService,
    private chat: ChatService,
    private gStorage: GStorageService
  ) {
    this.client = this.initializeMsGraphClient()
  }

  async sendMail(data: ApplicationFormDto, attachments: Array<Express.Multer.File>) {
    // Gitlab Markdown needs double \n for proper Newlines
    const today = new Date()
    const bucketFolder = `${encodeURIComponent(data.firstName)}_${encodeURIComponent(data.lastName)}_${today.getDate().toString().padStart(2, '0')}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getFullYear()}_${today.getHours().toString().padStart(2, '0')}-${today.getMinutes().toString().padStart(2, '0')}-${today.getSeconds().toString().padStart(2, '0')}`
    const filenames = attachments.map((file) => file.originalname).join('\n')
    const attachmentLinks: GitlabLink[] = await this.handleAttachments(attachments, bucketFolder)
    const issueSubject = `${data.jobListing} - ${data.firstName} ${data.lastName}`
    const replySubject =
      `${data.jobListing === 'Initiativbewerbung' ? 'Deine Initiativbewerbung' : `Deine Bewerbung als ${data.jobListing}`}` +
      ` bei Triarc Laboratories`
    const issueButtons = this.createResponseButtons(data, replySubject)
    const issueText = this.createGitlabIssue(data, attachmentLinks, issueButtons)
    const replyText = this.createConfirmationText(data, filenames)
    const slackMessage = this.createSlackMessage(data)
    const slackBlocks = this.createSlackBlocks(data)
    const issueEmail = this.createIssueEmail(issueSubject, issueText)
    const confirmationEmail = this.createConfirmationEmail(data, replySubject, replyText)
    await this.sendEmail(issueEmail, 'Internal Server Error sending issue E-Mail')
    await this.sendEmail(confirmationEmail, 'Internal Server Error sending confirmation E-Mail')
    await this.sendSlackMessage(slackMessage, slackBlocks)
  }

  private initializeMsGraphClient() {
    const scopes = 'https://graph.microsoft.com/.default'
    const tokenCredential = new ClientSecretCredential(
      this.getConfigValue('AZURE_TENANT_ID'),
      this.getConfigValue('AZURE_CLIENT_ID'),
      this.getConfigValue('AZURE_CLIENT_SECRET')
    )
    const authProvider = new TokenCredentialAuthenticationProvider(tokenCredential, { scopes: [scopes] })
    return Client.initWithMiddleware({
      debugLogging: true,
      authProvider,
    })
  }
  private getConfigValue(key: string): string {
    const value = this.config.get<string>(key)
    if (!value) {
      throw new Error(`Configuration value for ${key} not found`)
    }
    return value
  }
  private async handleAttachments(attachments: Array<Express.Multer.File>, bucketFolder: string) {
    const links: GitlabLink[] = []
    for (const file of attachments) {
      await this.gStorage.uploadFile(this.gStorage.getDefaultBucket(), file.originalname, file.buffer, bucketFolder)
      const fileURI = encodeURIComponent(file.originalname)
      const fileUrl = `${gCloudBaseURL}${this.gStorage.getDefaultBucket()}/${bucketFolder}/${fileURI}`
      const fileLink: GitlabLink = {
        title: file.originalname,
        url: fileUrl,
      }
      links.push(fileLink)
    }
    return links
  }
  private createResponseButtons(data: ApplicationFormDto, replySubject: string) {
    const subject = encodeURIComponent(replySubject)
    const templateTexts = this.createResponsesFromTemplateStrings(data)
    const responseButtons: string[] = []
    for (const response of templateTexts) {
      responseButtons.push(
        `<a href="mailto:${data.email}?subject=${subject}&body=${encodeURIComponent(response.template)}">${response.buttonText}</a>`
      )
    }
    return responseButtons
  }
  private createResponsesFromTemplateStrings(data: ApplicationFormDto): MailtoTemplate[] {
    const positiveResponse = {
      template:
        `Hallo ${data.firstName},\n\n` +
        `${
          data.jobListing === 'Initiativbewerbung'
            ? `Herzlichen Dank für deine Initiativbewerbung und dein Interesse an unserem Team „triarc-laboratories“. \n`
            : `Herzlichen Dank für deine Bewerbung und dein Interesse an der Position als ${data.jobListing} in unserem Team „triarc-laboratories“.\n`
        }` +
        `${this.getConfigValue('MAIL_RESPONSE_POSITIVE')}`,
      buttonText: 'Zu Interview Einladen',
    }
    const negativeResponse = {
      template: `Hallo ${data.firstName},\n\n` + `${this.getConfigValue('MAIL_RESPONSE_NEGATIVE')}`,
      buttonText: 'Vorläufig Absagen',
    }
    return [positiveResponse, negativeResponse]
  }
  private createGitlabIssue(data: ApplicationFormDto, attachmentLinks: GitlabLink[], issueButtons: string[]) {
    return (
      `${
        data.jobListing === 'Initiativbewerbung'
          ? `#### Initiativbewerbung von ${data.firstName} ${data.lastName}\n\n`
          : `#### Bewerbung von ${data.firstName} ${data.lastName} als ${data.jobListing}\n\n`
      }` +
      `Email: ${data.email}\n\n` +
      `Lohnvorstellung: ${data.lohn}\n\n` +
      `Telefon: ${data.phone ?? '-'}\n\n` +
      `Nachricht: ${data.message ?? '-'}\n\n` +
      `Was liegt dir beim Arbeitgeber besonders am Herz: ${data.arbeitgeber ?? '-'}\n\n` +
      `Anhang:\n` +
      attachmentLinks.map((link) => `- [${link.title}](${link.url})`).join('\n\n') +
      issueButtons.map((button) => `\n\n${button}`).join('')
    )
  }
  private createConfirmationText(data: ApplicationFormDto, filenames: string) {
    return (
      `Hallo ${data.firstName}, \n\n` +
      `Wir haben Deine Bewerbung mit den folgenden Informationen erhalten:\n\n` +
      `Vorname: ${data.firstName}\n` +
      `Nachname: ${data.lastName}\n` +
      `Email: ${data.email}\n` +
      `Lohnvorstellung: ${data.lohn}\n` +
      `Telefon: ${data.phone ?? '-'}\n` +
      `Nachricht: ${data.message ?? '-'}\n\n` +
      `Was liegt dir beim Arbeitgeber besonders am Herz: ${data.arbeitgeber ?? '-'}\n\n` +
      `Anhang:\n` +
      `${filenames}\n\n` +
      `Vielen Dank für Deine Bewerbung, wir melden uns so schnell wie möglich bei Dir.`
    )
  }
  private createIssueEmail(issueSubject: string, issueText: string): Message {
    return {
      subject: issueSubject,
      toRecipients: [
        {
          emailAddress: {
            address: this.getConfigValue('GITLAB_TARGET_MAIL'),
          },
        },
      ],
      body: {
        contentType: 'text',
        content: issueText,
      },
    }
  }
  private createConfirmationEmail(data: ApplicationFormDto, replySubject: string, replyText: string): Message {
    return {
      subject: replySubject,
      toRecipients: [
        {
          emailAddress: {
            address: data.email,
          },
        },
      ],
      body: {
        contentType: 'text',
        content: replyText,
      },
    }
  }
  private createSlackBlocks(data: ApplicationFormDto) {
    const slackBlocks: Block[] | KnownBlock[] = [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: '*Neue Bewerbung über die Website*',
        },
      },
      {
        type: 'divider',
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text:
            `${data.jobListing} - ${data.firstName} ${data.lastName}\n` +
            `Email: ${data.email}\n` +
            `Telefon: ${data.phone ?? '-'}\n` +
            `Nachricht: ${data.message ?? '-'}\n\n`,
        },
      },
      {
        type: 'divider',
      },
      {
        type: 'actions',
        elements: [
          {
            type: 'button',
            text: {
              type: 'plain_text',
              text: 'Zum Board',
            },
            value: 'to_app_board',
            url: this.getConfigValue('GITLAB_APPLICATION_BOARD'),
          },
        ],
      },
    ]
    return slackBlocks
  }
  private createSlackMessage(data: ApplicationFormDto) {
    return (
      `Neue Bewerbung über die Website:\n` +
      `Stelle: ${data.jobListing}\n` +
      `Kandidat: ${data.firstName} ${data.lastName}\n` +
      `Email: ${data.email}\n` +
      `Telefon: ${data.phone ?? '-'}\n` +
      `Nachricht: ${data.message ?? '-'}\n\n`
    )
  }
  private async sendEmail(email: Message, errorMessage: string) {
    try {
      await this.client.api(`/users/${this.getConfigValue('MAIL_USER')}/sendMail`).post({ message: email })
    } catch (error) {
      this.logger.error(errorMessage, error, `E-Mail Contents: ${email}`)
      throw new HttpException(errorMessage, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
  private async sendSlackMessage(message: string, blocks: Block[] | KnownBlock[]) {
    try {
      await this.chat.postMessage('', message, blocks)
    } catch (error) {
      this.logger.error('Error sending Slack Message', error.stack, `Message Text: ${message}`)
      throw new HttpException('Internal Server Error sending Slack Message', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
