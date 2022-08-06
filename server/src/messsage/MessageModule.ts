import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from 'src/user/UserEntity';
import { UserService } from 'src/user/UserService';

import { MessageController } from './MessageController';
import { Message } from './MessageEntity';
import { MessageService } from './MessageService';
import { MessageGateway } from './gateway/MessageGateway';

@Module({
  imports: [TypeOrmModule.forFeature([Message, User])],
  providers: [MessageGateway, MessageService, UserService, JwtService],
  controllers: [MessageController],
  exports: [MessageService],
})
export class MessageModule {}
