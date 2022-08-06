import { useAppContext } from '@/contexts/AppContext/AppContext';
import formStyles from '@/styles/Form.module.css';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';

export default function Register() {
  const {
    state: { connected },
  } = useAppContext();
  const router = useRouter();

  useEffect(() => {
    if (connected) {
      router.push('/inbox');
    }
  }, [connected]);

  const { register } = useAppContext();
  const [form, setForm] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
  } as Record<string, any>);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    await register(form);
  };

  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setForm({ ...form, [target.name]: target.value });
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <img src="/logo.svg" alt="sneakers" />

        <form onSubmit={submit} className={formStyles.form}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={form.email}
            placeholder="email"
          />

          <input
            type="text"
            name="firstname"
            onChange={handleChange}
            value={form.firstname}
            placeholder="firstname"
          />

          <input
            type="text"
            name="lastname"
            onChange={handleChange}
            value={form.lastname}
            placeholder="lastname"
          />

          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={form.password}
            placeholder="password"
          />

          <button className={styles.button}>S'enregistrer</button>
          <Link href="/">
            <a className={styles.register}>Connexion</a>
          </Link>
        </form>
      </main>
      <div className={styles.imgContainer}>
        <img src="/login-background.png" alt="sneakers" />
      </div>
    </div>
  );
}
