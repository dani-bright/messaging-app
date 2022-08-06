import { FC, memo } from 'react';
import styles from "./Message.module.css";
import Message from '../../models/Message';

export interface SubjectProps{
  message: Message;
  read: boolean;
  onClick: ({sender, subject, content}:Pick<Message, "sender" | "subject" | "content">) => any;
}

export const Subject: FC<SubjectProps> = ({ message, onClick, read }) => {
  const handleClick = () => {
    onClick({
      sender: message.sender,
      subject: message.subject,
      content: message.content,
    })
  }
  
    return (
      <main className={styles.message} onClick={handleClick}>
        <div className={`${styles.read} ${read ? styles.seen : ''}`}></div>
        <div className={styles.subject}>
          <p className={styles.sender}>
          {message.sender?.firstname} {message.sender?.lastname}
          </p>
          <p >{message.subject}</p>
        </div>
        
      </main>
    );
};