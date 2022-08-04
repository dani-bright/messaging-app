import styles from "../styles/Home.module.css";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useAppContext } from "../contexts/AppContext/AppContext";
import User from "../models/User";
import { useRouter } from "next/router";
import { usePersistedContext } from 'react-persist-context'


export default function Register() {
   const { state: { connected } } = usePersistedContext();
  const router = useRouter();

  useEffect(() => {
    if (connected) {
      router.push('/inbox')
    }
  }, [connected]);
  
  const { register } = useAppContext();
  const [form, setForm] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname:"",
  } as Record<string, any>);
 
  const submit = async (e: FormEvent) => {
    e.preventDefault();
    await register(form)
  }

  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setForm({...form,[target.name]: target.value})
  }


  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <form onSubmit={submit} className={styles.form}>
          <input className={styles.input} type="email" name="email" onChange={handleChange} value={form.email} placeholder="email" />
          
          <input className={styles.input} type="text" name="firstname" onChange={handleChange} value={form.firstname} placeholder="firstname" />

          <input className={styles.input} type="text" name="lastname" onChange={handleChange} value={form.lastname} placeholder="lastname" />
          
          <input className={styles.input} type="password" name="password" onChange={handleChange} value={form.password} placeholder="password" />
        
        <button>login</button>
      </form>     
      </main>

      
    </div>
  );
}


