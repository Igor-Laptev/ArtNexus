import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from '../../redux/store';
import PostItem from '../posts/PostItem';
import { loadPosts } from '../posts/postsSlice';

function ModeratorPage(): JSX.Element {
  const posts = useSelector((store: RootState) => store.posts.posts);
  const notModerated = posts.filter((post) => post.isModerated !== true);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(loadPosts()).catch(console.log);
  // }, [notModerated]);
  return (
    <div>
      {notModerated.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default ModeratorPage;
