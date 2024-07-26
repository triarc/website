import { Body, Controller, Post, Query, UploadedFiles, UseInterceptors } from '@nestjs/common'

import { Email, EmailService } from './email.service'
import { FilesInterceptor } from '@nestjs/platform-express'

@Controller('email')
export class EmailController {
  constructor(private email: EmailService) {}

  @Post('/send')
  @UseInterceptors(FilesInterceptor('files'))
  async send(@Body('mail') email: Email, @UploadedFiles() files: Array<Express.Multer.File>): Promise<void> {
    await this.email.sendMail(email, files)
  }
}
