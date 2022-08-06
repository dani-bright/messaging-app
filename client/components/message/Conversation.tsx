import { useAppContext } from '@/contexts/AppContext/AppContext';
import { useConversation } from '@/hooks/useConversation';
import { useSocket } from '@/hooks/useSocket';
import Message from '@/models/Message';
import User from '@/models/User';
import styles from '@/styles/Message.module.css';
import moment from 'moment-timezone';
import React, { ChangeEvent, FC, useEffect, useState } from 'react';

export interface ConversationProps {
  message?: Message;
}

export const Conversation: FC<ConversationProps> = ({
  message: currentMessage,
}) => {
  const {
    state: { user: me },
    readConversation,
    updateUserMessages,
  } = useAppContext();

  const [user, setUser] = useState<User | undefined>(undefined);

  const [reply, setReply] = useState('');

  const socket = useSocket();

  const conversationMessages = useConversation(currentMessage?.subject);

  useEffect(() => {
    if (currentMessage) {
      const conversationReceivedMessages = conversationMessages.filter(
        (message) => message.sender.id !== user!.id,
      );
      conversationReceivedMessages.length &&
        readConversation(
          user!.id,
          conversationReceivedMessages.map((message) => message.id),
        );
    }
  }, [currentMessage]);

  useEffect(() => setUser(me), [me]);

  const postMessage = () => {
    reply !== '' &&
      socket.emit('chat', {
        subject: currentMessage?.subject,
        content: reply,
        senderId: user!.id,
        receiverId: currentMessage?.sender.id,
      });

    setReply('');
  };

  socket.on('newMessage', (chat: Message) => {
    updateUserMessages(chat);
  });

  const handleReplyChange = (e: ChangeEvent) => {
    const target = e.target as HTMLTextAreaElement;

    setReply(target.value);
  };

  const messages = conversationMessages.map((message) => (
    <div key={`conv-${message.id}`} className={styles.messageContent}>
      <div className={styles.messageContentHeader}>
        <p>
          {message.sender.email === user!.email ? 'Moi' : message.sender.email}
        </p>

        <p>
          {moment(message.createdAt)
            .locale('fr')
            .format('dddd, MMMM Do YYYY, h:mm:ss a')
            .toString()}
        </p>
      </div>

      <div className={styles.content}>
        <p>{message.content}</p>
      </div>
    </div>
  ));

  return (
    <main className={styles.messagePreview}>
      {currentMessage && conversationMessages.length ? (
        <>
          <section className={styles.conversation}>{messages}</section>
          <div className={styles.reply}>
            <textarea
              name="reply"
              value={reply}
              onChange={handleReplyChange}
            ></textarea>
            <button className={styles.button} onClick={postMessage}>
              Répondre
            </button>
          </div>
        </>
      ) : (
        <></>
      )}
    </main>
  );
};
