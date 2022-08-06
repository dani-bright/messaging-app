import { Server, Socket } from 'socket.io';

import { UseGuards } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

import { CreateMessageDto } from '../CreateMessageDto';
import { MessageService } from '../MessageService';
import { WsGuard } from './WsGuard';

@WebSocketGateway({
  cors: true,
})
export class MessageGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  constructor(
    private messageServices: MessageService, // eslint-disable-next-line @typescript-eslint/no-empty-function
  ) {}

  @WebSocketServer() server: Server;
  users = 0;

  async handleConnection() {
    // A client has connected
    this.users++;

    // Notify connected clients of current users
    this.server.emit('users', this.users);
  }

  async handleDisconnect() {
    // A client has disconnected
    this.users--;
    // Notify connected clients of current users
    this.server.emit('users', this.users);
  }

  @UseGuards(WsGuard)
  @SubscribeMessage('chat')
  async onChat(socket: Socket, message: CreateMessageDto) {
    const createdMessage = await this.messageServices.sendMessage(message);
    this.server.sockets.emit('newMessage', createdMessage);
  }
}
