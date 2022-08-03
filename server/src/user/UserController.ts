import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/JwtAuthGuard';
import { CreateUserDto } from './dtos/CreateUserDto';
import { User } from './UserEntity';
import { UserService } from './UserService';

export type UserStrategyRequest = Request & { user?: User };

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get('/authenticated')
  async getAuthenticatedUser(
    @Req() request: UserStrategyRequest,
  ): Promise<User> {
    return request.user;
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  async getUser(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.service.getOne(id);
  }

  @Post('/')
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.service.createUser(createUserDto);
  }
}
