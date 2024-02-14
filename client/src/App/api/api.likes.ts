import type { Like, PostId } from '../../features/posts/types';

// eslint-disable-next-line import/prefer-default-export
export const fetchLike = async (id: PostId): Promise<Like> => {
  const res = await fetch('/api/likes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ postId: id }),
  });
  const data: Like = (await res.json()) as Like;
  return data;
};

// export const fetchDislike = () => {};
