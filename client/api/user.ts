
import User from '../models/User';
import { fetchApi } from './fetchApi';

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
  user:Partial<User>
): Promise<User & { token: string }> {
  return fetchApi('POST', 'user', undefined, {
    body: user,
  });
}
