import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import * as path from 'path'
import { ChatController } from './chat.controller'
import { ChatService } from './chat.service'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.join(process.cwd(), 'public'),
    }),
    ConfigModule.forRoot(),
  ],
  controllers: [ChatController],
  providers: [ChatService],
})
export class AppModule {}
