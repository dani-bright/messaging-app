import { ChangeEvent, FC, memo, useEffect, useState } from 'react';
import styles from "./Message.module.css";
import { AppContextInterface, useAppContext } from '../../contexts/AppContext/AppContext';
import { MessageProps } from './Message';
import Message from '../../models/Message';
import User from '../../models/User';
import moment from 'moment-timezone';


export interface MessagePreviewProps{
  message?: Message;
}

export const MessagePreview : FC<MessagePreviewProps> =({message: currentMessage})=> {
  const { sendMessage, state: { user: me } } = useAppContext();
  
  const [user, setUser] = useState<User>(undefined);

  const [reply, setReply] = useState("");

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

  const userMessages = user ? [...user.sentMessages, ...user.receivedMessages] : [];


  const conversation = userMessages.length && currentMessage ? userMessages.filter(message => message.subject === currentMessage.subject)
    .sort((messageA: Message, messageB: Message) => messageA.createdAt > messageB.createdAt ? 1 : -1)
    .map(message => (
    <div key={`conv-${message.id}`} className={styles.messageContent}>
      {message.sender.email === user.email ?"Moi" :message.sender.email}
      <p>{message.content}</p>
      <div className={styles.reply}>
        <textarea name="reply" value={reply} onChange={handleReplyChange}></textarea>
        <button className={styles.button} onClick={postMessage}>Répondre</button>
        </div>
        <p>{ moment(message.createdAt).locale('fr').format("dddd, MMMM Do YYYY, h:mm:ss a").toString()}</p>
    </div>
  )) : null;


    return (
      <main className={styles.messagePreview}>
        {currentMessage ? conversation : <></>
        }
      </main>
    );
};