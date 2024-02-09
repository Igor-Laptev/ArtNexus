import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../redux/store';

const PostPage = (props): JSX.Element => {
  const { id } = useParams();
  const posts = useSelector((store: RootState) => store.posts.posts);
  return (
    <div>
      {posts.map((post) => (
        console.log(post);
        
      ))}
    </div>
  );
};

export default PostPage;
