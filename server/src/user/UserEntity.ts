import { Exclude } from 'class-transformer';
import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';

import { Message } from 'src/messsage/MessageEntity';
import { BaseEntity } from 'src/utils/BaseEntity';

@Entity('user')
export class User extends BaseEntity {
  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column({ length: 50, unique: true })
  email: string;

  @Column()
  @Exclude()
  password: string;

  @OneToMany(() => Message, (message) => message.sender)
  @JoinColumn({ name: 'sentmessageid' })
  sentMessages?: Message[];

  @OneToMany(() => Message, (message) => message.receiver)
  @JoinColumn({ name: 'receivedmessageid' })
  receivedMessages?: Message[];

  public static get scopes(): Record<string, string[]> {
    return {
      full: ["sentMessages", "receivedMessages"],
    };
  }
}
