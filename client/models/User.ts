import Apartment from './Message';
import Message from './Message';

export default class User {
  id!: number;
  receivedMessages: Message[] = [];
  sentMessages: Message[] = [];

  email!: string;
  firstname!: string;
  lastname!: string;


  identityDocuments: Document[] = [];
  rib: Document;

  constructor(data: Partial<User> | any = {}) {
    Object.assign(this, data);
  }

}
