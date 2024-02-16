// fetch-запросы

import type { User, UserSignIn, UserSignUp } from '../../features/auth/type';
import type { UserId } from '../../features/users/types';

export const fetchCheckUser = async (): Promise<User> => {
  const res = await fetch('/api/auth/check');

  const data: { user: User } = (await res.json()) as {
    user: User;
  };
  return data.user;
};

export const fetchSignUp = async (user: UserSignUp): Promise<User> => {
  const res = await fetch('/api/auth/registration', {
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

export const fetchSignIn = async (user: UserSignIn): Promise<User> => {
  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user),
    });

    // if (!res) {
    //   throw new Error(`Server responded with ${res.status}: ${res.statusText}`);
    // }

    const data: { message: string; user: User } = (await res.json()) as {
      message: string;
      user: User;
    };

    if (!data || !data.user) {
      throw new Error('No user data returned from the server');
    }

    return data.user;
  } catch (error) {
    console.error('Error during sign in:', error);
    throw error;
  }
};

export const fetchLogOut = async (): Promise<void> => {
  const res = await fetch('/api/auth/logout');
  const data = (await res.json()) as {
    message: string;
  };
  if (data.message !== 'success') {
    throw new Error(data.message);
  }
};

export const fetchLoadAvatar = async (
  formData: FormData,
): Promise<{ avatar: string; id: UserId }> => {
  const res = await fetch('/api/auth/avatar', {
    method: 'PUT',
    body: formData,
  });
  const data: { avatar: string; id: UserId } = (await res.json()) as { avatar: string; id: UserId };
  return data;
};
