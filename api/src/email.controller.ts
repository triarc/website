import {
  Body,
  Controller,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common'

import { ApplicationFormDto, EmailService } from './email.service'
import { FilesInterceptor } from '@nestjs/platform-express'
import { ValidateAttachmentsPipe } from './attachmentValidator'

@Controller('email')
export class EmailController {
  constructor(private email: EmailService) {}

  @Post('/application')
  @UseInterceptors(FilesInterceptor('attachments'))
  async send(
    @UploadedFiles(
      new ValidateAttachmentsPipe()
      // new ParseFilePipe({
      //   validators: [
      //     new FileTypeValidator({ fileType: 'application/pdf' }),
      //     new MaxFileSizeValidator({ maxSize: 10 * 1024 * 1024 }),
      //   ],
      // })
    )
    attachments: Array<Express.Multer.File>,
    @Body() body: ApplicationFormDto
  ): Promise<void> {
    await this.email.sendMail(body, attachments)
  }
}
