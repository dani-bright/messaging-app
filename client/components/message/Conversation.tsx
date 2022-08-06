import { ChangeEvent, FC, memo, useEffect, useState } from 'react';
import styles from "./Message.module.css";
import { AppContextInterface, useAppContext } from '../../contexts/AppContext/AppContext';
import { SubjectProps } from './Subject';
import Message from '../../models/Message';
import User from '../../models/User';
import moment from 'moment-timezone';
import { useConversation } from '../../hooks/useConversation';


export interface ConversationProps{
  message?: Message;
}

export const Conversation : FC<ConversationProps> =({message: currentMessage})=> {
  const { sendMessage, state: { user: me }, readConversation } = useAppContext();
  
  const [user, setUser] = useState<User>(undefined);

  const [reply, setReply] = useState("");

  const conversationMessages = useConversation(currentMessage?.subject);
  
  useEffect(() => {
    if (currentMessage) {
      const conversationReceivedMessages = conversationMessages.filter(message => message.sender.id !== me.id);
      conversationReceivedMessages.length && readConversation(me.id, conversationReceivedMessages.map(message => message.id))
    }

  }, [currentMessage]);

  useEffect(() => setUser(me), [me]);

  const postMessage = () => {
    reply !== "" && sendMessage({
      subject: currentMessage.subject,
      content: reply,
      senderId: user.id,
      receiverId: currentMessage.sender.id,
    } as Partial<Message>);

    setReply("");
  }


  const handleReplyChange = (e:ChangeEvent) => {
    const target = e.target as HTMLTextAreaElement

    setReply(target.value);
  }

  const messages = conversationMessages
    .map(message => (
    <div key={`conv-${message.id}`} className={styles.messageContent}>
      {message.sender.email === user.email ?"Moi" :message.sender.email}
      <p>{message.content}</p>
        <p>{ moment(message.createdAt).locale('fr').format("dddd, MMMM Do YYYY, h:mm:ss a").toString()}</p>
    </div>
  ));


    return (
      <main className={styles.messagePreview}>
        {currentMessage && conversationMessages.length ? (
          <>
            <section className={styles.conversation}>
              {messages}
            </section>
            <div className={styles.reply}>
                <textarea name="reply" value={reply} onChange={handleReplyChange}></textarea>
                <button className={styles.button} onClick={postMessage}>Répondre</button>
              </div>
          </>
        ) : <></>
        }
      </main>
    );
};