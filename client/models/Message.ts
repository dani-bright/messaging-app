import { Moment } from 'moment-timezone';
import User from './User';
export default class Message {
  id!: number;
  sender!: User;
  receiver!: User;
  subject: string;
  content: string;
  createdAt: Moment;
  senderId: number;
  receiverId: number;


  constructor(data: Record<string, any>) {
    Object.assign(this, data);
  }

 
}
