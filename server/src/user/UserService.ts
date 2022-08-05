import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';

import {
  BadRequestException,
  NotFoundException,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { MessageService } from 'src/messsage/MessageService';
import { BaseService } from 'src/utils/baseService';

import { User } from './UserEntity';
import { CreateUserDto } from './dtos/CreateUserDto';
import { ReadSubjectDto } from './dtos/ReadSubjectDto';

@Injectable()
export class UserService extends BaseService<User> {
  constructor(
    @InjectRepository(User)
    repository: Repository<User>,
    private messageService: MessageService,
  ) {
    super(repository);
  }

  async getOneByEmail(email: string): Promise<User> {
    return this.repository
      .findOneOrFail({
        where: { email },
        // we might have some perf issues by pulling the relations like this when the user will have a lot of messages. A solution would be to rewrite a specific qeury using a query builder
        relations: User.scopes.full,
      })
      .catch(() => {
        throw new NotFoundException();
      });
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.repository.findOne({
      where: { email: createUserDto.email },
    });

    if (user) {
      throw new BadRequestException('user.post.email.already-exist');
    }

    const params: Partial<User> = { ...createUserDto };

    params.password = bcrypt.hashSync(params.password, 10);

    const userCreated = await this.repository.save(params);

    return this.getOne(userCreated.id);
  }

  async readSubject(readSubjectDto: ReadSubjectDto): Promise<User> {
    try {
      await this.messageService.readMessages(readSubjectDto.messageIds);
      return this.getOne(readSubjectDto.userId, User.scopes.full);
    } catch (error) {
      throw new Error(error);
    }
  }
}
