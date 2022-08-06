import Message from '@/models/Message';
import styles from '@/styles/Message.module.css';
import React, { FC } from 'react';

export interface SubjectProps {
  message: Message;
  read: boolean;
  onClick: (message: Message) => any;
}

export const Subject: FC<SubjectProps> = ({ message, onClick, read }) => {
  const handleClick = () => {
    onClick(message);
  };

  return (
    <main className={styles.message} onClick={handleClick}>
      <div className={`${styles.read} ${read ? styles.seen : ''}`}></div>
      <div className={styles.subject}>
        <p className={styles.sender}>
          {message.sender?.firstname} {message.sender?.lastname}
        </p>
        <p>{message.subject}</p>
      </div>
    </main>
  );
};
