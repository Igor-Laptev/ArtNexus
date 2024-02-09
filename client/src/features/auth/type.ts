export type User = {
  id: number;
  name: string;
  email: string;
  avatar: string;
  password: string;
  isAdmin: boolean;
};

export type AuthState = {
  auth: User | undefined;
  error: string | undefined;
};

export type UserSignIn = Omit<User, 'id' | 'avatar'>;
export type UserSignUp = Omit<User, 'id'> & { rpassword: string };
export type UserWithOutId = Omit<User, 'id'>;
