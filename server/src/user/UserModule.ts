import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Message } from 'src/messsage/MessageEntity';
import { MessageService } from 'src/messsage/MessageService';

import { UserController } from './UserController';
import { User } from './UserEntity';
import { UserService } from './UserService';

@Module({
  imports: [TypeOrmModule.forFeature([User, Message])],
  providers: [UserService, MessageService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
