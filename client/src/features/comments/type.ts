import type { PostId } from '../posts/types';
import type { User, UserId } from '../users/types';

export type Comment = {
  id: number;
  user_id: UserId;
  post_id: PostId;
  text: string;
  User: User;
};

export type CommentForm = Omit<Comment, ''>
