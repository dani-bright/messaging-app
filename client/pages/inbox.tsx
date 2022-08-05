import { useEffect, useState } from "react";
import { AppContextInterface, useAppContext } from "../contexts/AppContext/AppContext";
import styles from "../styles/Inbox.module.css";


import { useRouter } from 'next/router';
import { MessageComponent } from "../components/message/Message";
import User from "../models/User";
import { Header } from "../components/Header";
import { MessagePreview } from "../components/message/MessagePreview";
import { MessageSender } from "../components/message/MessageSender";
import { groupBy } from "../helpers/helpers";
import Message from "../models/Message";


export default function Inbox() {

  const { state: { connected:userConnected, user:me } } = useAppContext() ;
  const router = useRouter();

  const [user, setUser] = useState<User>(undefined);

  const [selectedMessage, setSelectedMessage] = useState(undefined);

  //https://nextjs.org/docs/messages/react-hydration-error
  useEffect(() => {
    setUser(me);
  }, []);  

  useEffect(() => {
    if (!userConnected) {
      router.push('/')
    }
  }, [userConnected]);

  
  const showMessagePreview = (message) => {
    setSelectedMessage(message)
  }

  if (!user) {
    return null;
  }


   const messages = [...user.receivedMessages,...user.sentMessages];
  const subjects = groupBy(messages, (message: Message) => message.subject);

   const receivedSubject = Array.from(subjects.values()).map(messages => <MessageComponent key={messages[0].subject} message={messages[0]} onClick={showMessagePreview} />);
  
  
  const inboxMessageCount = user.receivedMessages?.length || 0;

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.inbox}>
        <aside className={styles.messages}>
          <MessageSender />
          <div>boite de réception ({inboxMessageCount})</div>
          {receivedSubject}
        </aside>
      <section className={styles.preview}>
          <MessagePreview message={selectedMessage}/>
      </section>
      </div>
     
    </main>
  );
}
