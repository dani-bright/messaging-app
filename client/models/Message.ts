import User from '@/models/User';
import { Moment } from 'moment-timezone';

export default class Message {
  id!: number;
  sender!: User;
  receiver!: User;
  subject!: string;
  content!: string;
  createdAt!: Moment;
  senderId!: number;
  receiverId!: number;
  read!: boolean;

  constructor(data: Record<string, any>) {
    Object.assign(this, data);
  }
}
