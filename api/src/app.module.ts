import { Module } from '@nestjs/common'
import { ChatController } from './chat.controller'
import { ChatService } from './chat.service'
import { ConfigModule } from '@nestjs/config'
import { RootController } from './root.controller'

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [ChatController, RootController],
  providers: [ChatService],
})
export class AppModule {}
