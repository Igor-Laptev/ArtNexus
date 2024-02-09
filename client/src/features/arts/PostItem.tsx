import React from 'react';
import type { Post } from './types';
// import { useAppDispatch } from '../../redux/store';

function PostPage({ post }: { post: Post }): JSX.Element {
  // const dispatch = useAppDispatch();

  return (
    <div>
      <h1>{post.title}</h1>
      <h2>{post.description}</h2>
      {/* <img src={post.Gallery} alt="" /> */}
    </div>
  );
}

export default PostPage;
