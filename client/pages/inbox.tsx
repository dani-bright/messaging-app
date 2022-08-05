import { useEffect, useState } from "react";
import { AppContextInterface, useAppContext } from "../contexts/AppContext/AppContext";
import styles from "../styles/Inbox.module.css";


import { useRouter } from 'next/router';
import { Subject } from "../components/message/Subject";
import User from "../models/User";
import { Header } from "../components/Header";
import { Conversation as Conversation } from "../components/message/Conversation";
import { MessageSender } from "../components/message/MessageSender";
import { groupBy } from "../helpers/helpers";
import Message from "../models/Message";
import { useConversation } from "../hooks/useConversation";


export default function Inbox() {

  const { state: { connected:userConnected, user:me }, readConversation } = useAppContext() ;
  const router = useRouter();

  const [user, setUser] = useState<User>(undefined);

  const [selectedMessage, setSelectedMessage] = useState(undefined);

  //https://nextjs.org/docs/messages/react-hydration-error
  useEffect(() => {
    setUser(me);
  }, [me]);  

  useEffect(() => {
    if (!userConnected) {
      router.push('/')
    }
  }, [userConnected]);


  
  const showMessagePreview = (message) => {
    setSelectedMessage(message);
  }

  if (!user) {
    return null;
  }

  const messages = [...user.receivedMessages,...user.sentMessages];
  const subjects = groupBy(messages, (message: Message) => message.subject);

  const receivedSubject = Array.from(subjects.values()).map(messages => {    
    const read = messages.filter(message=>message.sender.id !== user.id).every(message => message.read);
    
    return <Subject key={messages[0].subject} read={read} message={messages[0]} onClick={showMessagePreview} />
  });  
  
  const inboxMessageCount = user.receivedMessages?.length || 0;

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.inbox}>
        <aside className={styles.messages}>
          <MessageSender />
          <div>
            <p>boite de réception ({inboxMessageCount})</p>
            <div>
              <input type="checkbox" />
              afficher uniquement les mails non-lus
            </div>
          </div>
          {receivedSubject}
        </aside>
      <section className={styles.preview}>
          <Conversation message={selectedMessage}/>
      </section>
      </div>
     
    </main>
  );
}
