import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import {
  BadRequestException,
  NotFoundException,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dtos/CreateUserDto';
import { User } from './UserEntity';
import { BaseService } from 'src/utils/baseService';

@Injectable()
export class UserService extends BaseService<User> {
  constructor(
    @InjectRepository(User)
    repository: Repository<User>,
  ) {
    super(repository);
  }

  async getOneByEmail(email: string): Promise<User> {
    return this.repository
      .findOneOrFail({
        where: { email },
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
}
