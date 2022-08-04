import * as bcrypt from 'bcrypt';

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { User } from 'src/user/UserEntity';
import { UserService } from 'src/user/UserService';
import { AuthError } from 'src/utils/errors';

import { jwtConstants } from './constants';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUserCredentials(email: string, password: string): Promise<any> {
    let user: User;

    try {
      user = await this.userService.getOneByEmail(email);
    } catch (error) {
      throw new UnauthorizedException(AuthError.EMAIL_NOT_FOUND);
    }

    if (!bcrypt.compareSync(password, user.password)) {
      throw new UnauthorizedException(AuthError.PASSWORD_INVALID);
    }

    return { ...user };
  }

  async login(user: User) {
    const payload = { username: user.email, sub: user.id };
    return {
      ...user,
      token: this.jwtService.sign(payload, {
        secret: jwtConstants.secret,
      }),
    };
  }
}
