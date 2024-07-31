import { Injectable, Optional } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import * as nodemailer from 'nodemailer'
import { IsEmail, IsNotEmpty, IsString } from 'class-validator'
import { ChatService } from './chat.service'

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
      `Neue Bewerbung für ${data.jobListing}\n\n` +
      `- Bewerber: ${data.firstName} ${data.lastName}\n\n` +
      `- Email: ${data.email}\n\n` +
      `- Telefon: ${data.phone ?? '-'}\n\n` +
      `- Nachricht: ${data.message ?? '-'}`
    let issueSubject = `Bewerbung für ${data.jobListing}`

    let filenames = attachments.map((file) => file.originalname).join('\n')
    let replyText =
      `Wir haben ihre Bewerbung mit den folgenden Informationen erhalten:\n\n` +
      `Vorname: ${data.firstName}\n` +
      `Nachname: ${data.lastName}\n` +
      `Email: ${data.email}\n` +
      `Telefon: ${data.phone ?? '-'}\n` +
      `Nachricht: ${data.message ?? '-'}\n\n` +
      `Anhang:\n` +
      `${filenames}\n\n` +
      `Vielen Dank für Ihre Bewerbung, wir melden uns so schnell wie möglich bei Ihnen.`

    let replySubject = `Ihre Bewerbung für ${data.jobListing}`

    let slackMessage =
      `Neue Bewerbung über die Website:\n` +
      `Stelle: ${data.jobListing}\n` +
      `Kandidat: ${data.firstName} ${data.lastName}\n` +
      `Email: ${data.email}\n` +
      `Telefon: ${data.phone ?? '-'}\n` +
      `Nachricht: ${data.message ?? '-'}\n\n`

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

    await this.chat.postMessage('', slackMessage)
  }
}
