import type{ Post } from "../posts/types";

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  avatar: string;
  isAdmin: boolean;
  Posts: Post[];
};

export type UserId = User['id'];
