import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/UserEntity';
import { UserService } from 'src/user/UserService';
import { AuthError } from 'src/utils/errors';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtTokenService: JwtService,
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

  async loginWithCredentials(user: User) {
    const payload = { email: user.email, sub: user.id };
    const existingUser = await this.validateUserCredentials(
      user.email,
      user.password,
    );

    return {
      ...existingUser,
      token: this.jwtTokenService.sign(payload),
    };
  }
}

export const jwtConstants = {
  secret: 'secretKey',
};
