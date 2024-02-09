import type { UserId } from '../users/types';

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
};
export type PostId = Post['id'];

export type PostWithoutId = Omit<Post, 'id'>;

export type Gallery = {
  id: number;
  post_id: PostId;
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
