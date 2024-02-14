import React from 'react';
import { useSelector } from 'react-redux';
import { type RootState } from '../../redux/store';
import PostItem from '../posts/PostItem';

function LikePage(): JSX.Element {
  const posts = useSelector((store: RootState) => store.posts.posts);
  const user = useSelector((store: RootState) => store.auth.auth);
  console.log(user);
  console.log(posts);

  const likedPosts = posts.filter(
    (post) => post.Likes.length > 0 && post.Likes.map((like) => user && user.id === like.user_id),
  );
  console.log(likedPosts);

  return (
    <div>
      {likedPosts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default LikePage;
