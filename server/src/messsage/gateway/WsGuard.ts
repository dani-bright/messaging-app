import { Observable } from 'rxjs';

import { CanActivate, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { jwtConstants } from 'src/auth/constants';
import { UserService } from 'src/user/UserService';

@Injectable()
export class WsGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  canActivate(
    context: any,
  ): boolean | any | Promise<boolean | any> | Observable<boolean | any> {
    const bearerToken =
      context.args[0].handshake.headers.authorization.split(' ')[1];
    try {
      const decoded = this.jwtService.verify(bearerToken, {
        secret: jwtConstants.secret,
      }) as any;
      return new Promise((resolve, reject) => {
        return this.userService.getOneByEmail(decoded.email).then((user) => {
          if (user) {
            resolve(user);
          } else {
            reject(false);
          }
        });
      });
    } catch (ex) {
      console.log(ex);
      return false;
    }
  }
}
