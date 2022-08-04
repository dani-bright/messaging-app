import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';

import { JwtAuthGuard } from 'src/auth/JwtAuthGuard';

import { MessageService } from './MessageService';

@Controller('message')
export class MessageController {
  constructor(private readonly service: MessageService) {}

  @Post('/send')
  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  async sendMessage(@Param('id', ParseIntPipe) id: number): Promise<void> {
    // return this.service.sendMessage();
  }
}
