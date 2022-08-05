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
      message.read = false;
      const createMessage = await this.repository.save(message);
      return this.getOne(createMessage.id, ['sender']);
    } catch (error) {
      throw new Error(error);
    }
  }

  async readMessages(messageIds: number[]): Promise<void> {
    try {
      const messages = await Promise.all(
        messageIds.map(async (id) => {
          const message = await this.getOne(id);

          return { ...message, read: true };
        }),
      );
      await this.repository.save(messages);
    } catch (error) {
      throw new Error(error);
    }
  }
}
