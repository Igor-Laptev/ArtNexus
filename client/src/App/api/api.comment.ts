import type { Comment } from '../../features/comments/type';
import type { PostId } from '../../features/posts/types';

const fetchCreateComment = async ({
  text,
  post_id,
}: {
  text: string;
  post_id: PostId;
}): Promise<Comment> => {
  const res = await fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text, post_id }),
  });
  const data: { comment: Comment; message: string } = (await res.json()) as {
    comment: Comment;
    message: string;
  };
  return data.comment;
};

export default fetchCreateComment;
