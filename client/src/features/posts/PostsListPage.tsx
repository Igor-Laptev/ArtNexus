import React from 'react';
import { useSelector } from 'react-redux';
import { type RootState } from '../../redux/store';
import './styles.css';
import PostItem from './PostItem';

function PostsList(): JSX.Element {

  const admin = useSelector((store: RootState) => store.auth.auth)?.isAdmin
  const posts = useSelector((store: RootState) => store.posts.posts)
  


  return (
    <>
      <h2>Все публикации</h2>
      <div className="all-post-container">
        {admin
          ? posts.map((post) => <PostItem key={post.id} post={post} />)
          : posts
              .filter((post) => post.isModerated)
              .map((post) => <PostItem key={post.id} post={post} />)}
      </div>
    </>
  );
}

export default PostsList;
