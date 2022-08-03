import styles from "../styles/Home.module.css";

import { useEffect } from "react";
import { useAppContext } from "../contexts/AppContext/AppContext";


export default function Home() {
  const { login } = useAppContext();
 
  const submit = () => {
    
  }


  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Messaging app</h1>
     
      </main>

      <form onSubmit={submit}>
        <input type="email" />
        <input type="password" />
      </form>
    </div>
  );
}


