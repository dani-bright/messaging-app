import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MessageController } from './MessageController';
import { Message } from './MessageEntity';
import { MessageService } from './MessageService';

@Module({
  imports: [TypeOrmModule.forFeature([Message])],
  providers: [MessageService],
  controllers: [MessageController],
  exports: [MessageService],
})
export class MessageModule {}
