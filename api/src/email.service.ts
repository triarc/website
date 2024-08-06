import { Injectable, Optional } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import * as nodemailer from 'nodemailer'
import { IsEmail, IsNotEmpty, IsString } from 'class-validator'
import { ChatService } from './chat.service'
import { Block, KnownBlock } from '@slack/web-api'

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
  @Optional()
  phone?: string
  @Optional()
  message?: string
}

@Injectable()
export class EmailService {
  transporter: nodemailer.Transporter

  constructor(
    private config: ConfigService,
    private chat: ChatService
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
    // Gitlab Issue by Email seems to need double \n for Newlines for some reason
    let issueText =
      `${
        data.jobListing === 'Initiativbewerbung'
          ? `#### Initiativbewerbung von ${data.firstName} ${data.lastName}\n\n`
          : `#### Bewerbung von ${data.firstName} ${data.lastName} als ${data.jobListing}\n\n`
      }` +
      `Email: ${data.email}\n\n` +
      `Telefon: ${data.phone ?? '-'}\n\n` +
      `Nachricht: ${data.message ?? '-'}`
    let issueSubject = `${data.jobListing} - ${data.firstName} ${data.lastName}`

    let filenames = attachments.map((file) => file.originalname).join('\n')
    let replyText =
      `Wir haben Deine Bewerbung mit den folgenden Informationen erhalten:\n\n` +
      `Vorname: ${data.firstName}\n` +
      `Nachname: ${data.lastName}\n` +
      `Email: ${data.email}\n` +
      `Telefon: ${data.phone ?? '-'}\n` +
      `Nachricht: ${data.message ?? '-'}\n\n` +
      `Anhang:\n` +
      `${filenames}\n\n` +
      `Vielen Dank für Ihre Bewerbung, wir melden uns so schnell wie möglich bei Dir.`

    let replySubject =
      `${data.jobListing === 'Initiativbewerbung' ? 'Deine Initiativbewerbung' : `Deine Bewerbung als ${data.jobListing}`}` +
      `bei Triarc Laboratories`

    let slackMessage =
      `Neue Bewerbung über die Website:\n` +
      `Stelle: ${data.jobListing}\n` +
      `Kandidat: ${data.firstName} ${data.lastName}\n` +
      `Email: ${data.email}\n` +
      `Telefon: ${data.phone ?? '-'}\n` +
      `Nachricht: ${data.message ?? '-'}\n\n`

    let slackBlocks: Block[] | KnownBlock[] = [
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
            value: this.config.get('GITLAB_APPLICATION_BOARD'),
          },
        ],
      },
    ]

    let issueEmail = {
      from: this.config.get('MAIL_USER'),
      to: this.config.get('GITLAB_TARGET_MAIL'),
      subject: issueSubject,
      text: issueText,
      attachments: [],
    }

    let confirmationEmail = {
      from: this.config.get('MAIL_USER'),
      to: data.email,
      subject: replySubject,
      text: replyText,
    }

    for (let file of attachments) {
      let attachment = {
        filename: file.originalname,
        contentType: file.mimetype,
        content: file.buffer,
      }
      issueEmail.attachments.push(attachment)
    }

    this.transporter.sendMail(issueEmail, (error, info) => {
      if (error) {
        console.log(error)
      } else {
        console.log('Email sent: ' + info.response)
      }
    })

    this.transporter.sendMail(confirmationEmail, (error, info) => {
      if (error) {
        console.log(error)
      } else {
        console.log('Email sent: ' + info.response)
      }
    })

    await this.chat.postMessage('', slackMessage, slackBlocks)
  }
}
