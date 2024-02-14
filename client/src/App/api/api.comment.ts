import type { Comment } from '../../features/comments/type';

const fetchCreateComment = async ({ text, post_id }): Promise<Comment> => {
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
