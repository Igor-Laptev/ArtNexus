import { Art } from '../arts/type';
import { Category } from '../categories/types';
import type { User, UserId } from '../users/types';

export type Post = {
  id: number;
  user_id: number;
  category_id: number;
  title: string;
  description: string;
  isModerated: boolean;
  isAdult: boolean;
  Likes: Like[];
  Comments: Comment[];
  Gallery: Gallery;
  Category: Category
  createdAt: string;
  User: User
};
export type PostId = Post['id'];
export type PostIsAdult = Post['isAdult'];
export type PostIsModerated = Post['isModerated'];

export type PostWithoutId = Omit<Post, 'id'>;

export type Gallery = {
  id: number;
  post_id: PostId;
  Arts: Art[];
};

export type GalleryId = Gallery['id'];

export type Like = {
  id: number;
  user_id: UserId;
  post_id: PostId;
};

export type Comment = {
  id: number;
  user_id: UserId;
  post_id: PostId;
  text: string;
};
