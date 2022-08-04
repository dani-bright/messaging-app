import styles from "../styles/Home.module.css";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useAppContext } from "../contexts/AppContext/AppContext";
import { useRouter } from "next/router";

import { usePersistedContext } from 'react-persist-context'


export default function Home() {
  const { login } = useAppContext();

  const { state: { connected } } = usePersistedContext();
  const router = useRouter();

  useEffect(() => {
    if (connected) {
      router.push('/inbox')
    }
  },[connected]);


  const [form, setForm] = useState({
    email: "",
    password:""
  });

 
  const submit = async (e: FormEvent) => {
    e.preventDefault();
    await login(form.email, form.password);
    router.push('/inbox');
  }

  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setForm({...form,[target.name]: target.value})
  }


  return (
    <div className={styles.container}>
      <main className={styles.main}>
<form onSubmit={submit} className={styles.form}>
        <input className={styles.input} type="email" name ="email" onChange={handleChange} value={form.email}/>
        <input className={styles.input} type="password" name="password" onChange={handleChange} value={form.password} />
        
        <button className={styles.button}>login</button>
      </form>     
      </main>

      
    </div>
  );
}


