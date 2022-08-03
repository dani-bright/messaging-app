import Message from '../models/Message';
import { fetchApi } from './fetchApi';

export async function postMessage(
  token: string,
  message: Partial<Message>[],
) {
  return fetchApi<Message>(
    'POST',
    `/message/`,
    token,
    {
      body: message,
    },
  );
}
