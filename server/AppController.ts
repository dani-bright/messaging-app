import { Controller, Post,Request, UseGuards } from '@nestjs/common';
import { AuthService } from 'src/auth/AuthService';
import { LocalAuthGuard } from 'src/auth/LocalAuthGuard';


@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

}

