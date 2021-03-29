import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import * as qs from 'qs'
import * as crypto from 'crypto'
import { Buffer } from 'buffer'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class SlackGuard implements CanActivate {
  private readonly slackSigningSecret: string
  constructor(private config: ConfigService) {
    this.slackSigningSecret = this.config.get('SLACK_SIGNING_SECRET')
  }

  canActivate(context: ExecutionContext): boolean {
    const { headers, body } = context.switchToHttp().getRequest()
    const hmac = crypto.createHmac('sha256', this.slackSigningSecret)

    const rawBody = qs.stringify(body, { format: 'RFC1738' })
    const slackSignature = headers['x-slack-signature']
    const requestTimestamp = headers['x-slack-request-timestamp']

    if (!slackSignature) {
      return false
    }

    const timeInSeconds = Math.floor(new Date().getTime() / 1000)
    // Reject if request is older than 5 minutes
    if (Math.abs(timeInSeconds - requestTimestamp) > 300) {
      return false
    }

    const signatureBaseString = `v0:${requestTimestamp}:${rawBody}`
    const mySignature = 'v0=' + hmac.update(signatureBaseString, 'utf8').digest('hex')

    try {
      return crypto.timingSafeEqual(Buffer.from(mySignature, 'utf8'), Buffer.from(slackSignature, 'utf8'))
    } catch {
      return false
    }
  }
}
