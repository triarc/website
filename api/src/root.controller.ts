import { Controller, Get } from '@nestjs/common'

@Controller()
export class RootController {
  @Get('')
  async get() {
    return 'hello :), looking for a job? checkout https://triarc-labs.com/jobs'
  }
}
