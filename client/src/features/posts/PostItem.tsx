import React from 'react';
import type { Post } from './types';
import './styles.css';
// import { useAppDispatch } from '../../redux/store';

function PostPage({ post }: { post: Post }): JSX.Element {
  // const dispatch = useAppDispatch();

  return (
    <div className="post-container">
      <div className="post-content">
        <h1>{post.title}</h1>
        <h2>{post.description}</h2>
        <img src={post.Category.img} style={{ width: '100px' }} alt="" />
        <button type="button">Удалить</button>
        {/* <img src={post.Gallery} alt="" /> */}
      </div>
    </div>
  );
}

export default PostPage;
