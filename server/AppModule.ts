import { AppController } from 'AppController';
import { AppService } from 'AppService';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from 'src/auth/AuthModule';
import { AuthService } from 'src/auth/AuthService';
import { Message } from 'src/messsage/MessageEntity';
import { MessageModule } from 'src/messsage/MessageModule';
import { User } from 'src/user/UserEntity';
import { UserModule } from 'src/user/UserModule';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'docker-mysql',
      password: 'smartdb',
      port: 3306,
      username: 'root',
      database: 'messaging-app',
      synchronize: true,
      logging: false,
      charset: 'utf8mb4',
      entities: [Message, User],
    }),
    AuthModule,
    UserModule,
    MessageModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthService, JwtService],
})
export class AppModule {}
