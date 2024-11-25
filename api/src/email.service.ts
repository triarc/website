import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import * as nodemailer from 'nodemailer'
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { ChatService } from './chat.service'
import { Block, KnownBlock } from '@slack/web-api'
import { GStorageService } from './gStorage.service'
import { Client, ClientOptions } from '@microsoft/microsoft-graph-client'
import { ClientSecretCredential } from '@azure/identity'
import {
  TokenCredentialAuthenticationProvider,
  TokenCredentialAuthenticationProviderOptions,
} from '@microsoft/microsoft-graph-client/lib/src/authentication/azureTokenCredentials'

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

export interface GitlabLink {
  title: string
  url: string
}

const gCloudBaseURL = 'https://storage.cloud.google.com/'

@Injectable()
export class EmailService {
  // transporter: nodemailer.Transporter
  // client: Client

  constructor(
    private config: ConfigService,
    private chat: ChatService,
    private gStorage: GStorageService
  ) {
    // const scopes = 'https://graph.microsoft.com/.default'
    // const tokenCredential = new ClientSecretCredential(
    //   this.config.get('AZURE_TENANT_ID'),
    //   this.config.get('AZURE_CLIENT_ID'),
    //   this.config.get('AZURE_CLIENT_SECRET')
    // )
    // const authProvider = new TokenCredentialAuthenticationProvider(tokenCredential, { scopes: [scopes] })
    // this.client = Client.initWithMiddleware({
    //   debugLogging: true,
    //   authProvider,
    // })
    // this.transporter = nodemailer.createTransport({
    //   host: this.config.get('SMTP_HOST'),
    //   port: this.config.get('SMTP_PORT'),
    //   auth: {
    //     user: this.config.get('MAIL_USER'),
    //     pass: this.config.get('MAIL_PASSWORD'),
    //   },
    // })
  }

  async sendMail(data: ApplicationFormDto, attachments: Array<Express.Multer.File>) {
    const scopes = 'https://graph.microsoft.com/.default'
    const tokenCredential = new ClientSecretCredential(
      this.config.get('AZURE_TENANT_ID'),
      this.config.get('AZURE_CLIENT_ID'),
      this.config.get('AZURE_CLIENT_SECRET')
    )
    const authProvider = new TokenCredentialAuthenticationProvider(tokenCredential, { scopes: [scopes] })
    const client = Client.initWithMiddleware({
      debugLogging: true,
      authProvider,
    })

    // Gitlab Markdown needs double \n for proper Newlines
    const today = new Date()
    const bucketFolder = `${encodeURIComponent(data.firstName)}_${encodeURIComponent(data.lastName)}_${today.getDate().toString().padStart(2, '0')}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getFullYear()}_${today.getHours().toString().padStart(2, '0')}-${today.getMinutes().toString().padStart(2, '0')}-${today.getSeconds().toString().padStart(2, '0')}`
    const filenames = attachments.map((file) => file.originalname).join('\n')

    const attachmentLinks: GitlabLink[] = await this.handleAttachments(attachments, bucketFolder)
    const issueSubject = `${data.jobListing} - ${data.firstName} ${data.lastName}`

    const replySubject =
      `${data.jobListing === 'Initiativbewerbung' ? 'Deine Initiativbewerbung' : `Deine Bewerbung als ${data.jobListing}`}` +
      ` bei Triarc Laboratories`
    const issueButtons = this.createResponseTemplates(data, replySubject)
    const issueText = this.createGitlabIssue(data, attachmentLinks, issueButtons)
    const replyText = this.createReply(data, filenames)
    const slackMessage = this.createSlackMessage(data)
    const slackBlocks = this.createSlackBlocks(data)
    const issueEmail = this.createIssueEmail(issueSubject, issueText)
    const confirmationEmail = this.createConfirmationEmail(data, replySubject, replyText)
    // for (let file of attachments) {
    //   let attachment = {
    //     filename: file.originalname,
    //     contentType: file.mimetype,
    //     content: file.buffer,
    //   }
    //   issueEmail.attachments.push(attachment)
    // }
    try {
      let response = await client.api(`/users/${this.config.get('MAIL_USER')}/sendMail`).post({ message: issueEmail })
      // await this.transporter.sendMail(issueEmail)
      console.log('Issue Email sent')
    } catch (error) {
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR)
    }

    try {
      let response = await client
        .api(`/users/${this.config.get('MAIL_USER')}/sendMail`)
        .post({ message: confirmationEmail })
      // this.transporter.sendMail(confirmationEmail)
      console.log('Confirmation Email sent')
    } catch (error) {
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR)
    }

    await this.chat.postMessage('', slackMessage, slackBlocks)
  }

  private createConfirmationEmail(data: ApplicationFormDto, replySubject: string, replyText: string) {
    // return {
    //   from: this.config.get('MAIL_USER'),
    //   to: data.email,
    //   subject: replySubject,
    //   text: replyText,
    // }
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
        contentType: 'Text',
        content: replyText,
      },
    }
  }

  private createIssueEmail(issueSubject: string, issueText: string) {
    // return {
    //   from: this.config.get('MAIL_USER'),
    //   to: this.config.get('GITLAB_TARGET_MAIL'),
    //   subject: issueSubject,
    //   text: issueText,
    //   attachments: [],
    // }

    return {
      subject: issueSubject,
      toRecipients: [
        {
          emailAddress: {
            address: this.config.get('GITLAB_TARGET_MAIL'),
          },
        },
      ],
      body: {
        contentType: 'Text',
        content: issueText,
      },
    }
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
      `\n\n${issueButtons[0]}\n\n${issueButtons[1]}`
    )
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
            url: this.config.get('GITLAB_APPLICATION_BOARD'),
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

  private createReply(data: ApplicationFormDto, filenames: string) {
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

  private createResponseTemplates(data: ApplicationFormDto, replySubject: string) {
    const subject = encodeURIComponent(replySubject)
    const templateTexts = this.createTemplateBodies(data)
    const bodyPositiveResponse = encodeURIComponent(templateTexts[0])
    const bodyNegativeResponse = encodeURIComponent(templateTexts[1])
    return [
      `<a href="mailto:${data.email}?subject=${subject}&body=${bodyPositiveResponse}">Zu Interview Einladen</a>`,
      `<a href="mailto:${data.email}?subject=${subject}&body=${bodyNegativeResponse}">Vorläufig Absagen</a>`,
    ]
  }

  private createTemplateBodies(data: ApplicationFormDto) {
    const positiveResponse =
      `Hallo ${data.firstName},\n\n` +
      `${
        data.jobListing === 'Initiativbewerbung'
          ? `Herzlichen Dank für deine Initiativbewerbung und dein Interesse an unserem Team „triarc-laboratories“. \n`
          : `Herzlichen Dank für deine Bewerbung und dein Interesse an der Position als ${data.jobListing} in unserem Team „triarc-laboratories“.\n`
      }` +
      `${this.config.get('MAIL_RESPONSE_POSITIVE')}`
    const negativeResponse = `Hallo ${data.firstName},\n\n` + `${this.config.get('MAIL_RESPONSE_NEGATIVE')}`
    return [positiveResponse, negativeResponse]
  }
}
