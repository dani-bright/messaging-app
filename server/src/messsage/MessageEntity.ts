import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { BaseEntity } from 'src/utils/BaseEntity';
import { User } from 'src/user/UserEntity';

@Entity('message')
export class Message extends BaseEntity {
  @Column()
  content: string;

  @Column()
  subject: string;

  @ManyToOne(() => User, (user) => user.sentMessages)
  @JoinColumn({ name: 'senderid' })
  sender?: User;

  @ManyToOne(() => User, (user) => user.receivedMessages)
  @JoinColumn({ name: 'receiverid' })
  receiver?: User;
}
