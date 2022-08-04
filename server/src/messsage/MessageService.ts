import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { BaseService } from 'src/utils/baseService';

import { Message } from './MessageEntity';

@Injectable()
export class MessageService extends BaseService<Message> {
  constructor(
    @InjectRepository(Message)
    repository: Repository<Message>,
  ) {
    super(repository);
  }

  async sendMessage(email: string, password: string): Promise<Message> {
    return;
  }
}
