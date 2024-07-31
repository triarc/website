import {
  Body,
  Controller,
  FileTypeValidator,
  ParseFilePipe,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common'

import { ApplicationFormDto, EmailService } from './email.service'
import { FilesInterceptor } from '@nestjs/platform-express'
import { ChatService } from './chat.service'

@Controller('email')
export class EmailController {
  constructor(private email: EmailService) {}

  @Post('/application')
  @UseInterceptors(FilesInterceptor('attachments'))
  async send(
    @UploadedFiles(
      new ParseFilePipe({
        validators: [new FileTypeValidator({ fileType: 'application/pdf' })],
      })
    )
    attachments: Array<Express.Multer.File>,
    @Body() body: ApplicationFormDto
  ): Promise<void> {
    await this.email.sendMail(body, attachments)
  }
}
