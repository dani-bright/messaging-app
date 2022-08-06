import Message from '@/models/Message';

export default class User {
  id!: number;
  receivedMessages: Message[] = [];
  sentMessages: Message[] = [];

  email!: string;
  firstname!: string;
  lastname!: string;

  constructor(data: Partial<User> | any = {}) {
    Object.assign(this, data);
  }
}
