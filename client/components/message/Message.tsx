import { FC, memo } from 'react';
import styles from "./Message.module.css";
import Message from '../../models/Message';

export interface MessageProps{
  message: Message;
  onClick: ({sender, subject, content}:Pick<Message, "sender" | "subject" | "content">) => any;
}

export const MessageComponent: FC<MessageProps> = ({ message, onClick }) => {
  const handleClick = () => {
    onClick({
      sender: message.sender,
      subject: message.subject,
      content: message.content,
    })
  }
    return (
      <main className={styles.message} onClick={handleClick}>
        <p className={styles.sender}>
          {message.sender?.firstname} {message.sender?.lastname}
        </p>
        <p className={styles.subject}>{message.subject}</p>
      </main>
    );
};