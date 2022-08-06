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

  const { state: { connected:userConnected, user:me } } = useAppContext() ;
  const router = useRouter();

  const [user, setUser] = useState<User>(undefined);
  const [selectedMessage, setSelectedMessage] = useState(undefined);
  const [filterSubjects, setFilterSubjects] = useState(true);

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

  const unReadReceivedSubjects = Array.from(subjects.values()).map(messages => { 
    const received = messages.filter(message => message.sender.id !== user.id);    

    const unRead = received.length && received.some(message => !message.read);
    
    return unRead ? <Subject key={messages[0].subject} read={false} message={messages[0]} onClick={showMessagePreview} /> : null;
  });  
  

  const receivedSubjects = Array.from(subjects.values()).map(messages => {    
    const allRed = messages.filter(message=>message.sender.id !== user.id).every(message => message.read);
    
    return <Subject key={messages[0].subject} read={allRed} message={messages[0]} onClick={showMessagePreview} />;
  });  

  
  
  const inboxMessageCount = unReadReceivedSubjects.reduce((acc, subject) => subject ? acc+1 :acc, 0);

  const toggleFilter = () => {
    setFilterSubjects(!filterSubjects)
  }

  return (
    <main className={styles.main}>
      <Header unReadMessageCount={inboxMessageCount}/>
      <div className={styles.inbox}>
        <aside className={styles.messages}>
          <div className={styles.inboxHeader}>
            <MessageSender />
            <p>Boite de réception ({inboxMessageCount})</p>
            <div>
              <input type="checkbox" checked={filterSubjects} onChange={ toggleFilter}/>
              Afficher uniquement les mails non-lus
            </div>
          </div>
          {filterSubjects? unReadReceivedSubjects :receivedSubjects}
        </aside>
      <section className={styles.preview}>
          <Conversation message={selectedMessage}/>
      </section>
      </div>
     
    </main>
  );
}
