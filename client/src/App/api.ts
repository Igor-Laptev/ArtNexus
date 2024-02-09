// fetch-запросы

import { User, UserSignUp } from '../features/auth/type';

export const fetchSignUp = async (user: UserSignUp): Promise<User> => {
  const res = await fetch('api/auth/registration', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(user),
  });
  if (res.status >= 400) {
    const data: { message: string } = (await res.json()) as {
      message: string;
    };
    throw new Error(data.message);
  }
  const data: { message: string; user: User } = (await res.json()) as {
    message: string;
    user: User;
  };
  return data.user;
};

export const fetchCheckUser = async (): Promise<User> => {
  const res = await fetch('api/auth/check');
  const data: { user: User } = (await res.json()) as {
    user: User;
  };
  return data.user;
};
