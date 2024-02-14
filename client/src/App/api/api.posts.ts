// fetch-запросы
/* eslint-disable import/prefer-default-export */
import type { Post, PostId, PostWithoutId } from '../../features/posts/types';

export const fetchLoadPosts = async (): Promise<Post[]> => {
  const res = await fetch('/api/posts');
  const data: { posts: Post[]; message: string } = (await res.json()) as {
    posts: Post[];
    message: string;
  };

  return data.posts;
};

export const fetchAddPost = async (formData: FormData): Promise<Post> => {
  const res = await fetch('/api/posts', {
    method: 'POST',
    body: formData,
  });
  const data: { post: Post } = (await res.json()) as { post: Post };
  return data.post;
};

export const fetchPostRemove = async (id: PostId): Promise<PostId> => {
  const res = await fetch(`/api/posts/${id}`, {
    method: 'DELETE',
  });
  const data: { message: string; postId: PostId } = (await res.json()) as {
    message: string;
    postId: PostId;
  };
  if (data.message !== 'success') {
    throw new Error(data.message);
  }
  return data.postId;
};

export const fetchModeratePost = async (
  id: PostId,
): Promise<{ message: string; id: PostId; post: Post }> => {
  const res = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
  });
  const data: { id: PostId; post: Post; message: string } = (await res.json()) as {
    id: PostId;
    post: Post;
    message: string;
  };

  return data;
};
