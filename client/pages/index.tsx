import styles from "../styles/Home.module.css";
import formStyles from "../styles/Form.module.css";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { getLocalStorage, useAppContext } from "../contexts/AppContext/AppContext";
import { useRouter } from "next/router";

import Link from "next/link";


export default function Home() {
  const { login, fetchUsers,  state: { connected } } = useAppContext();

  const router = useRouter();

  useEffect(() => {
    if (connected) {
      fetchUsers().then(() => {
         router.push('/inbox');
      }
      );
    }
  }, [connected]);


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
        <img src="/logo.svg" alt="sneakers" />
        <form onSubmit={submit} className={formStyles.form}>
          <input type="email" name ="email" onChange={handleChange} value={form.email}/>
          <input type="password" name="password" onChange={handleChange} value={form.password} />
          
          <button className={styles.button}>Se connecter</button>
          <Link href="/register" >
            <a className={styles.register}>S'enregistrer</a>
          </Link>
        </form>     
      </main> 
      <div className={styles.imgContainer}>
        <img src="/login-background.png" alt="sneakers" />
      </div>
      
    </div>
  );
}


