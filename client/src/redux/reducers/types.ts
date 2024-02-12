import type { Post, PostId } from '../../features/posts/types';
import type { Category } from '../../features/categories/types';
import type { User } from '../../features/users/types';
import type { Comment } from '../../features/comments/type';

export type PostsState = {
  posts: Post[];
  error: string | undefined;
  //   loading: boolean;
};

export type AuthState = {
  auth: User | undefined;
};

export type Action =
  | { type: 'posts/load'; payload: Post[] }
  | { type: 'posts/add'; payload: Post }
  | { type: 'posts/remove'; payload: PostId }
  | { type: 'comment/add'; payload: Comment }
  | { type: 'categories/load'; payload: Category[] }
  | { type: 'auth/sign-up'; payload: User }
  | { type: 'auth/sign-in'; payload: User }
  | { type: 'auth/logout' };
