import Message from '../models/Message';
import User from '../models/User';
import { fetchApi } from './fetchApi';

export async function createMessage(
  token: string,
  message: Partial<Message>,
) {
  return fetchApi<Message>(
    'POST',
    `message`,
    token,
    {
      body: message,
    },
  );
}

