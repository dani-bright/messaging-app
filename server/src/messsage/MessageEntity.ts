import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { User } from 'src/user/UserEntity';
import { BaseEntity } from 'src/utils/BaseEntity';

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
