import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from 'AppController';
import { AppService } from 'AppService';
import { AuthModule } from 'src/auth/AuthModule';
import { AuthService } from 'src/auth/AuthService';
import { Message } from 'src/messsage/MessageEntity';
import { User } from 'src/user/UserEntity';
import { UserModule } from 'src/user/UserModule';
import { UserService } from 'src/user/UserService';



@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forFeature([
      User,
    ]),
    TypeOrmModule.forRoot({
    type: 'mysql',
    // host: 'docker-mysql',
    // password: 'smartdb',
    host: "localhost",
    password: "",
    port: 3306,
    username: 'root',
    database: 'messaging-app',
    synchronize: true,
    logging: false,
    charset: 'utf8mb4',
    entities: [
      Message,
      User,
    ]
    }),
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthService, JwtService],
})
export class AppModule  {}
