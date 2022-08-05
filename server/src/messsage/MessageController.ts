import { Body, Controller, Post, UseGuards } from '@nestjs/common';

import { JwtAuthGuard } from 'src/auth/JwtAuthGuard';

import { CreateMessageDto } from './CreateMessageDto';
import { Message } from './MessageEntity';
import { MessageService } from './MessageService';

@Controller('message')
export class MessageController {
  constructor(private readonly service: MessageService) {}

  @UseGuards(JwtAuthGuard)
  @Post('/')
  async sendMessage(
    @Body() createMessageDto: CreateMessageDto,
  ): Promise<Message> {
    return this.service.sendMessage(createMessageDto);
  }
}
