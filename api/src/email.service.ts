import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import nodemailer from 'nodemailer'
import { SentMessageInfo } from 'nodemailer/lib/smtp-transport'

export interface Email {
  from: string
  to: string
  cc?: string
  subject: string
  text?: string
}

@Injectable()
export class EmailService {
  transporter: nodemailer.Transporter<SentMessageInfo>

  constructor(private config: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: 'smtp...',
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    })
  }

  async sendMail(mail: Email, attachments: Array<Express.Multer.File>) {
    const mailOptions = {
      from: mail.from,
      to: mail.to,
      cc: mail.cc,
      subject: mail.subject,
      text: mail.text,
      attachments: [],
    }

    for (let file of attachments) {
      let attachment = {
        filename: file.originalname,
        contentType: file.mimetype,
        content: file.buffer,
      }

      mailOptions.attachments.push(attachment)
    }

    this.transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error)
      } else {
        console.log('Email sent: ' + info.response)
      }
    })
  }
  //
  // async postMessage(thread: string, message: string) {
  //   const result = (await this.web.chat.postMessage({
  //     text: message,
  //     channel: this.channel,
  //     thread_ts: thread,
  //   })) as any
  //   if (result.ok) {
  //     if (thread) {
  //       return { thread }
  //     }
  //     return { thread: result.message.ts }
  //   }
  // }
}
