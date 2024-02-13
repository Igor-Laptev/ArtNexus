import React from 'react';
import { useSelector } from 'react-redux';
import { type RootState } from '../../redux/store';
import PostItem from '../posts/PostItem';

const ModeratorPage = (props) => {
  const posts = useSelector((store: RootState) => store.posts.posts);
  const notModerated = posts.filter((post) => post.isModerated !== true);

  return (
    <div>
      {notModerated.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default ModeratorPage;
