import { Module } from '@nestjs/common'
import { ChatController } from './chat.controller'
import { ChatService } from './chat.service'
import { ConfigModule } from '@nestjs/config'
import { RootController } from './root.controller'
import { EmailController } from './email.controller'
import { EmailService } from './email.service'

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [ChatController, RootController, EmailController],
  providers: [ChatService, EmailService],
})
export class AppModule {}
