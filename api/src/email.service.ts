import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import * as nodemailer from 'nodemailer'
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { ChatService } from './chat.service'
import { Block, KnownBlock } from '@slack/web-api'
import { GStorageService } from './gStorage.service'

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
  transporter: nodemailer.Transporter

  constructor(
    private config: ConfigService,
    private chat: ChatService,
    private gStorage: GStorageService
  ) {
    this.transporter = nodemailer.createTransport({
      host: this.config.get('SMTP_HOST'),
      port: this.config.get('SMTP_PORT'),
      auth: {
        user: this.config.get('MAIL_USER'),
        pass: this.config.get('MAIL_PASSWORD'),
      },
    })
  }

  async sendMail(data: ApplicationFormDto, attachments: Array<Express.Multer.File>) {
    // Gitlab Markdown needs double \n for proper Newlines
    const today = new Date()
    const bucketFolder = `${data.firstName}_${data.lastName}_${today.getDate().toString().padStart(2, '0')}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getFullYear()}_${today.getHours().toString().padStart(2, '0')}-${today.getMinutes().toString().padStart(2, '0')}-${today.getSeconds().toString().padStart(2, '0')}`
    const filenames = attachments.map((file) => file.originalname).join('\n')
    const attachmentLinks: GitlabLink[] = []

    for (const file of attachments) {
      await this.gStorage.uploadFile(this.gStorage.getDefaultBucket(), file.originalname, file.buffer, bucketFolder)
      const fileLink: GitlabLink = {
        title: file.originalname,
        url: `${gCloudBaseURL}${this.gStorage.getDefaultBucket()}/${bucketFolder}/${file.originalname}`,
      }
      attachmentLinks.push(fileLink)
    }

    const issueSubject = `${data.jobListing} - ${data.firstName} ${data.lastName}`

    const issueText =
      `${
        data.jobListing === 'Initiativbewerbung'
          ? `#### Initiativbewerbung von ${data.firstName} ${data.lastName}\n\n`
          : `#### Bewerbung von ${data.firstName} ${data.lastName} als ${data.jobListing}\n\n`
      }` +
      `Email: ${data.email}\n\n` +
      `Lohnvorstellung: ${data.lohn}\n` +
      `Telefon: ${data.phone ?? '-'}\n\n` +
      `Nachricht: ${data.message ?? '-'}\n\n` +
      `Was liegt dir beim Arbeitgeber besonders am Herz: ${data.arbeitgeber ?? '-'}\n\n` +
      `Anhang:\n` +
      attachmentLinks.map((link) => `- [${link.title}](${link.url})`).join('\n\n')

    const replySubject =
      `${data.jobListing === 'Initiativbewerbung' ? 'Deine Initiativbewerbung' : `Deine Bewerbung als ${data.jobListing}`}` +
      ` bei Triarc Laboratories`

    const replyText =
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

    const slackMessage =
      `Neue Bewerbung über die Website:\n` +
      `Stelle: ${data.jobListing}\n` +
      `Kandidat: ${data.firstName} ${data.lastName}\n` +
      `Email: ${data.email}\n` +
      `Telefon: ${data.phone ?? '-'}\n` +
      `Nachricht: ${data.message ?? '-'}\n\n`

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

    const issueEmail = {
      from: this.config.get('MAIL_USER'),
      to: this.config.get('GITLAB_TARGET_MAIL'),
      subject: issueSubject,
      text: issueText,
      attachments: [],
    }

    // for (let file of attachments) {
    //   let attachment = {
    //     filename: file.originalname,
    //     contentType: file.mimetype,
    //     content: file.buffer,
    //   }
    //   issueEmail.attachments.push(attachment)
    // }

    const confirmationEmail = {
      from: this.config.get('MAIL_USER'),
      to: data.email,
      subject: replySubject,
      text: replyText,
    }

    this.transporter.sendMail(issueEmail, (error, info) => {
      if (error) {
        throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR)
      } else {
        console.log('Email sent: ' + info.response)
      }
    })

    this.transporter.sendMail(confirmationEmail, (error, info) => {
      if (error) {
        throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR)
      } else {
        console.log('Email sent: ' + info.response)
      }
    })

    await this.chat.postMessage('', slackMessage, slackBlocks)
  }
}
