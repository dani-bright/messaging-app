import Message from '../models/Message';
import { useAppContext } from '@/contexts/AppContext/AppContext';
import { useMemo } from 'react';
import io from 'socket.io-client';

export const useSocket = () => {
  const {
    state: { token },
  } = useAppContext();

  const socket = useMemo(
    () =>
      io('ws://localhost:5000', {
        extraHeaders: {
          Authorization: `Bearer ${token}`,
        },
      }),
    [token],
  );

  socket.on('connect', () => {
    console.log('Connected to socket');
  });

  return socket;
};
