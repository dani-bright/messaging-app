import { useAppContext } from '../contexts/AppContext/AppContext';
import { useState, useEffect, FC } from 'react';
import styles from "../styles/Inbox.module.css";

export interface HeaderProps{
  unReadMessageCount: number;
}


export const Header: FC<HeaderProps> = ({unReadMessageCount}) => {  
  const { logout, state: { connected:userConnected, user:currentUser } } = useAppContext();

  const [connected, setConnected] = useState(false);
  const [user, setUser] = useState(undefined);

  //https://nextjs.org/docs/messages/react-hydration-error
  useEffect(() => {
    setConnected(userConnected)
    setUser(currentUser)
  }, []);


  return (
    <header className={styles.header}>
      <img src="/logo.svg" alt="sneakers" />
      <div className={styles.right}>
      
        {user ? (
          <div className={styles.user}>
            <div className={styles.avatar}>
              <p className={styles.initial}>{user.firstname.charAt(0)}</p>
              <div className={styles.count}>{ unReadMessageCount }</div>
            </div>
            <div>
              <p className={styles.firstname}>{user.firstname}</p>
              <p className={styles.email}>{user.email}</p>
            </div>
          </div>
        ) : null}
        {connected ? <p onClick={logout}>deconnexion</p> : null}
      </div>
    </header>
  )
};