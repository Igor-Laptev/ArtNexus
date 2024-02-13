import { PostId } from '../posts/types';
import { UserId } from '../users/types';

export type Like = {
  user_id: UserId;
  post_id: PostId;
};
