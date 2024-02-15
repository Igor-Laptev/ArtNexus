import type{ Comment } from "../comments/type";
import type{ Like, Post } from "../posts/types";

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  avatar: string;
  isAdmin: boolean;
  Posts: Post[];
  Comments: Comment[];
  Likes: Like[];
};


export type UserId = User['id'];


export type JustUser = {
  id: number;
  name: string;
  email: string;
  avatar: string;
  password: string;
  isAdmin: boolean;
};

export type UsersState = {
  users: JustUser[];
  error: string | undefined;
};