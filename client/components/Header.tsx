import Link from 'next/link'
import styles from "../styles/Home.module.css";
import { Menu } from './Menu';
import { usePersistedContext } from 'react-persist-context'
import { useAppContext } from '../contexts/AppContext/AppContext';


export const Header = () => {
  const { state: { connected } } = usePersistedContext();
  
  const { logout } = useAppContext();

  return (
    <header>
      {!connected ? <Menu /> : null}
      {connected ? <p onClick={logout}>deconnexion</p> : null}
      
    </header>
  )
};