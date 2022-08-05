import { useAppContext } from '../contexts/AppContext/AppContext';
import { useState, useEffect } from 'react';
import styles from "../styles/Inbox.module.css";



export const Header = () => {  
  const { logout, state: { connected:userConnected } } = useAppContext();

  const [connected, setConnected] = useState(false);

  //https://nextjs.org/docs/messages/react-hydration-error
  useEffect(() => {setConnected(userConnected)}, []);

  return (
    <header className={styles.header}>
      <img src="/logo.svg" alt="sneakers" />
      {connected ? <p onClick={logout}>deconnexion</p> : null}
      
    </header>
  )
};