import type { Post, PostId } from '../../features/arts/types';
import type { User } from '../../features/users/types';

export type PostsState = {
  posts: Post[];
  error: string | undefined;
  loading: boolean;
};

export type AuthState = {
  auth: User | undefined;
};

export type Action =
  | { type: 'posts/load'; payload: Post[] }
  | { type: 'posts/add'; payload: Post }
  | { type: 'posts/remove'; payload: PostId }
//   | { type: 'categories/load'; payload: Category[] }
  | { type: 'auth/sign-up'; payload: User }
  | { type: 'auth/sign-in'; payload: User }
  | { type: 'auth/logout' };
