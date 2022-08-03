import User from './User';



export default class Message {
  id!: number;
  sender!: User;
  receiver!: User;
  subject: string;
  content: string;
  createdAt: string;

  constructor(data: Record<string, any>) {
    Object.assign(this, data);

    
  }

 
}
