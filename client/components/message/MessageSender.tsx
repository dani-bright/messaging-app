import { ChangeEvent, FC, FormEvent, useState } from 'react';
import styles from "./Message.module.css";
import formStyles from "../../styles/Form.module.css";
import homeStyles from "../../styles/Home.module.css";
import {  useAppContext } from '../../contexts/AppContext/AppContext';



export const MessageSender: FC = () => {
  const { sendMessage, state: { users, user:currentUser } } = useAppContext();

  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    receiverId: "",
    subject: "",
    content: "",
  });

  const hideSender = () => {
    setShow(false);
  }

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    await sendMessage({
      receiverId: parseInt(form.receiverId),
      subject: form.subject,
      content: form.content,
      senderId: currentUser.id
    });
    hideSender();
  };

  const showSender = () => {
    setShow(true);
  }
 
  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setForm({
      ...form,
      [target.name]:target.value,
    });
  }

  const receivers = users.filter(user => user.id !== currentUser.id);  

    return (
      <main className={styles.sender}>
        <button className={styles.send} onClick={showSender}>nouveau message</button>
        <form onSubmit={submit} className={`${formStyles.form} ${formStyles.popup} ${show? formStyles.show: formStyles.hide}`}>
          <p onClick={hideSender}>fermer</p>
          <select name="receiverId" onChange={handleChange}>
            <option value="">choissez un destinataire</option>
            {
              receivers.map(user => <option key={user.id} value={user.id}>{user.email}</option>)
            }
          </select>
          <input type="text" name='subject' value={form.subject} onChange={handleChange}/>
          <textarea name='content' onChange={handleChange} value={form.content}></textarea>
          <button className={homeStyles.button} onClick={showSender}>envoyer</button>
        </form>
      </main>
    );
};