import { fetchApi } from '@/api/fetchApi';
import User from '@/models/User';

export async function postLogin(
  email: string,
  password: string,
): Promise<User & { token: string }> {
  return fetchApi('POST', 'login', undefined, {
    body: {
      email,
      password,
    },
  });
}

export async function createUser(
  user: Partial<User>,
): Promise<User & { token: string }> {
  return fetchApi('POST', 'user', undefined, {
    body: user,
  });
}

export async function getUsers(
  token: string,
): Promise<User & { token: string }> {
  return fetchApi('GET', 'user', token);
}

export async function readSubject(
  token: string,
  userId: number,
  messageIds: number[],
) {
  return fetchApi<User>('POST', `user/read-conversation`, token, {
    body: { messageIds, userId },
  });
}
