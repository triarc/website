import { BadRequestException, FileTypeValidator, Injectable, ParseFilePipe, PipeTransform } from '@nestjs/common'

@Injectable()
export class ValidateAttachmentsPipe implements PipeTransform {
  private readonly maxTotalFileSize = 10 * 1024 * 1024
  constructor(
    private readonly validationPipe: ParseFilePipe = new ParseFilePipe({
      validators: [new FileTypeValidator({ fileType: 'application/pdf' })],
    })
  ) {}

  async transform(attachments: Array<Express.Multer.File>) {
    if (!attachments) {
      throw new BadRequestException(`No attachments found`)
    }

    if (attachments.reduce((sum, current) => sum + current.size, 0) > this.maxTotalFileSize) {
      throw new BadRequestException(`Total Size of files can't exceed ${this.maxTotalFileSize / (1024 * 1024)} MB`)
    }

    for (const attachment of attachments) {
      await this.validationPipe.transform(attachment)
    }

    return attachments
  }
}
