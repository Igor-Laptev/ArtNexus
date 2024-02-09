import { User } from '../../features/auth/type';

export type AuthState = {
  auth: User | undefined;
};

export type Action =
  | { type: 'auth/sign-up'; payload: User }
  | { type: 'auth/sign-in'; payload: User }
  | { type: 'auth/logout'; payload: User };
