// fetch-запросы
/* eslint-disable import/prefer-default-export */
import type { Post, PostId } from '../../features/posts/types';

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
  id: PostId, isModerated: boolean
): Promise<{ message: string; id: PostId; isModerated: boolean }> => {
  const res = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    }
    , body: JSON.stringify({ isModerated,  }),
  });
  const data: { id: PostId;  message: string ; isModerated: boolean} = (await res.json()) as {
    id: PostId;
    message: string;
    isModerated: boolean
  };
  return data;
};

export const fetchIsAdult = async (id: PostId, isAdult: boolean): Promise<{ message: string; id: PostId; isAdult: boolean }> => {const res = await fetch(`/api/posts/${id}/isAdult`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
   body: JSON.stringify({ isAdult,  }),
})
  const data: { id: PostId;  message: string ; isAdult: boolean} = (await res.json()) as {
    id: PostId;
    message: string;
    isAdult: boolean
  }
  return data
}
