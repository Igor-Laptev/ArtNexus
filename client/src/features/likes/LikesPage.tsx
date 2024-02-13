import React from 'react';
import { useSelector } from 'react-redux';
import { type RootState } from '../../redux/store';

function LikePage(): JSX.Element {
  const posts = useSelector((store: RootState) => store.posts.posts);
  return <div></div>;
}

export default LikePage;
