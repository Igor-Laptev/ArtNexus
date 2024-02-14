import React from 'react';
import { useSelector } from 'react-redux';
import { type RootState } from '../../redux/store';
import PostItem from '../posts/PostItem';

function LikePage(): JSX.Element {
  const posts = useSelector((store: RootState) => store.posts.posts);
  const user = useSelector((store: RootState) => store.auth.auth);
  console.log('user в системе', user);
  // console.log(posts);

  // const likedPosts = posts.filter(
  //   (post) =>
  //     post.Likes.length > 0 && post.Likes.filter((like) => user && user.id === like.user_id),
  // );

  const likedPosts = posts && posts.filter((post) => post.Likes.length);

  const userLikedPosts = likedPosts.filter((post) =>
    post.Likes.some((like) => like.user_id === user?.id),
  );

  // const l = posts.filter((post) => )
  console.log('liked posts', userLikedPosts);

  return (
    <div>
      {userLikedPosts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default LikePage;
