import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from '../../redux/store';
import PostItem from '../posts/PostItem';

function ModeratorPage(): JSX.Element {
  const posts = useSelector((store: RootState) => store.posts.posts);
  const notModerated = posts.filter((post) => post.isModerated !== true);

  return (
    <div>
      {posts.map((post) => (
       <><PostItem key={post.id} post={post} /> {user && user.isAdmin && (
        <div className="adminisration">
          <button onClick={() => dispatch(removePost(post.id)).catch(console.log)} type="button">
            удалить
          </button>
          <button onClick={() => dispatch(moderatePost(post.id)).catch(console.log)} type="button">
            post
          </button>
          <button onClick={() => dispatch(moderatePost(post.id)).catch(console.log)} type="button">
            18+
          </button>
        </div>
      )}</> 
      ))}
    </div>
  );
}

export default ModeratorPage;
