import { Injectable } from '@nestjs/common'
import { Subject } from 'rxjs'
import { Block, ChatPostMessageResponse, KnownBlock, UsersInfoResponse, WebClient } from '@slack/web-api'
import { ConfigService } from '@nestjs/config'

export interface ChatMessage {
  name: string
  message: string
  time: Date
}

@Injectable()
export class ChatService {
  threads: { [key: string]: Subject<{ data: ChatMessage }> } = {}
  users: { [key: string]: string } = {}
  web: WebClient
  channel: string

  constructor(private config: ConfigService) {
    const token = this.config.get('SLACK_TOKEN')
    this.channel = this.config.get('SLACK_CHANNEL')
    this.web = new WebClient(token)
  }

  async getUsername(userId: string) {
    if (this.users[userId]) {
      return this.users[userId]
    }
    const info: UsersInfoResponse = await this.web.users.info({ user: userId })
    if (info.ok) {
      this.users[userId] = info.user.real_name
      return this.users[userId]
    }

    return userId
  }

  async postMessage(thread: string, message: string, blocks?: Block[] | KnownBlock[]) {
    const result: ChatPostMessageResponse = await this.web.chat.postMessage({
      text: message,
      blocks: blocks,
      channel: this.channel,
      thread_ts: thread,
    })
    if (result.ok) {
      if (thread) {
        return { thread }
      }
      return { thread: result.message.ts }
    }
  }

  subscribeToThread(thread: string) {
    if (!this.threads[thread]) {
      this.threads[thread] = new Subject<MessageEvent>()
    }
    return this.threads[thread].asObservable()
  }

  pushMessageToThread(thread: string, message: ChatMessage) {
    if (!this.threads[thread]) {
      this.threads[thread] = new Subject<MessageEvent>()
    }
    this.threads[thread].next({
      data: message,
    })
  }
}
