import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { BaseService } from 'src/utils/baseService';

import { CreateMessageDto } from './CreateMessageDto';
import { Message } from './MessageEntity';

@Injectable()
export class MessageService extends BaseService<Message> {
  constructor(
    @InjectRepository(Message)
    repository: Repository<Message>,
  ) {
    super(repository);
  }

  async sendMessage(createMessageDto: CreateMessageDto): Promise<Message> {
    try {
      const message = new Message();
      Object.assign(message, createMessageDto);
      const createMessage = await this.repository.save(message);
      return this.getOne(createMessage.id, ['sender']);
    } catch (error) {
      throw new Error(error);
    }
  }
}
