import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import type { RootState } from '../../redux/store';
import PostItem from '../posts/PostItem';
import AddPostForm from '../posts/AddPostForm';

function UserPage(): JSX.Element {
  const { userId } = useParams();
  const user = useSelector((store: RootState) =>
    store.posts.posts.find((post) => userId && post.user_id === +userId),
  )?.User;
  const owner = useSelector((store: RootState) => store.auth.auth);
  const posts = useSelector((store: RootState) =>
    store.posts.posts.filter((post) => userId && post.user_id === +userId),
  );
  if (!user) {
    return <div>Such user not found</div>;
  }
  return (
    <div>
      <div className="userInfo">
        <img src={user.avatar} style={{ width: '200px' }} alt="" />
        <h1>{user.name}</h1>
      </div>
      {owner?.id === user.id && <AddPostForm />}
      <div className="all-post-container">
        {posts.map((post) => (
          <>
            <PostItem key={post.id} post={post} />{' '}
            {owner?.id === user.id && (
              <div className="reduct">
                <button type="button">Delete</button>
                <button type="button">Edit</button>
              </div>
            )}{' '}
          </>
        ))}
      </div>
    </div>
  );
}

export default UserPage;
