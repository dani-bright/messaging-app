import { useAppContext } from '../../contexts/AppContext/AppContext';
import { sendMessage, useSocket } from '@/hooks/useSocket';
import Message from '@/models/Message';
import formStyles from '@/styles/Form.module.css';
import homeStyles from '@/styles/Home.module.css';
import styles from '@/styles/Message.module.css';
import React, { ChangeEvent, FC, FormEvent, useState } from 'react';

export const MessageSender: FC = () => {
  const {
    state: { users, user: currentUser },
    updateUserMessages,
  } = useAppContext();

  const socket = useSocket();

  socket.on('newMessage', (chat: Message) => {
    updateUserMessages(chat);
  });

  const formInitialState = {
    receiverId: '',
    subject: '',
    content: '',
  };

  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ ...formInitialState });

  const hideSender = () => {
    setShow(false);
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    socket.emit('chat', {
      receiverId: parseInt(form.receiverId),
      subject: form.subject,
      content: form.content,
      senderId: currentUser!.id,
    });

    setForm({ ...formInitialState });
    hideSender();
  };

  const showSender = () => {
    setShow(true);
  };

  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const receivers = users.filter((user) => user.id !== currentUser!.id);

  return (
    <main className={styles.sender}>
      <button className={styles.send} onClick={showSender}>
        nouveau message
      </button>
      <form
        onSubmit={submit}
        className={`${formStyles.form} ${formStyles.popup} ${
          show ? formStyles.show : formStyles.hide
        }`}
      >
        <p onClick={hideSender}>fermer</p>
        <select
          name="receiverId"
          onChange={handleChange}
          value={form.receiverId}
        >
          <option value="">choissez un destinataire</option>
          {receivers.map((user) => (
            <option key={user.id} value={user.id}>
              {user.email}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={form.content}
        ></textarea>
        <button className={homeStyles.button} onClick={showSender}>
          envoyer
        </button>
      </form>
    </main>
  );
};
