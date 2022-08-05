import { useState, useEffect } from "react";
import { useAppContext } from "../contexts/AppContext/AppContext";
import Message from "../models/Message";
import User from "../models/User";

export const useConversation = (subject?: string) => {
  const { state: { user: me } } = useAppContext();
  const [user, setUser] = useState<User>(undefined);
  
  useEffect(() => setUser(me), [me]);

  const userMessages = user ? [...user.sentMessages, ...user.receivedMessages] : [];

  return subject? userMessages.filter(message => message.subject === subject)
    .sort((messageA: Message, messageB: Message) => messageA.createdAt > messageB.createdAt ? 1 : -1):[];
}