export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  avatar: string;
  isAdmin: boolean;
};

export type UserId = User['id'];
