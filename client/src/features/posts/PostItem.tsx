import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import type { Post } from './types';
import './styles.css';
import './tooltipStyles.css';
import { likePost, moderatePost, removePost } from './postsSlice';
import { type RootState, useAppDispatch } from '../../redux/store';
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
function PostItem({ post }: { post: Post }): JSX.Element {
  // const dispatch = useAppDispatch();
  //  const formattedDate = new Date(post.createdAt);
  // const dateString = formattedDate.toLocaleDateString('ru-RU', {
  //   day: '2-digit',
  //   month: '2-digit',
  //   year: 'numeric',
  // });
  // const timeString = formattedDate.toLocaleTimeString('ru-RU', {
  //   hour: '2-digit',
  //   minute: '2-digit',
  // });

  // const user = useSelector((store: RootState) => store.)

  const firstArt = post.Gallery.Arts[0].src;
  const user = useSelector((store: RootState) => store.auth.auth);
  const dispatch = useAppDispatch();
  const [showToolTip, setShowToolTip] = useState(false);
  const onMouseEnterHandler = (): void => {
    setShowToolTip(true);
  };

  const onMouseLeaveHandler = (): void => {
    setShowToolTip(false);
  };
  return (
    <>
      <Link to={`posts/${post.id}`}>
        <div
          className="post-container"
          onMouseEnter={onMouseEnterHandler}
          onMouseLeave={onMouseLeaveHandler}
        >
          <div className="post-content item-box">
            {showToolTip && (
              <div
                className="tooltip"
                style={{
                  backgroundImage: `url(${firstArt})`,
                  backgroundRepeat: 'no-repeat',
                  // backgroundSize: 'contain',
                  // backgroundSize: 'cover',
                  width: '100%',
                  height: '100%',
                }}
              >
                <div className="post-text">{post.title}</div>
                <div className="post-text">{post.description}</div>
              </div>
            )}
            {!showToolTip && (
              <div
                className="cover"
                style={{
                  backgroundImage: `url(${firstArt})`,
                  backgroundRepeat: 'no-repeat',
                  // backgroundSize: 'contain',
                  // backgroundSize: 'cover',
                  width: '100%',
                  height: '100%',
                }}
              />
            )}
          </div>
        </div>
      </Link>
      <button onClick={() => dispatch(likePost(post.id)).catch(console.log)} type="button">
        Нравится
      </button>
      {user && user.isAdmin && (
        <div className="adminisration">
          <button onClick={() => dispatch(moderatePost(post.id)).catch(console.log)} type="button">
            post✅
          </button>
          <button onClick={() => dispatch(moderatePost(post.id)).catch(console.log)} type="button">
            18+🔞
          </button>
          <button onClick={() => dispatch(removePost(post.id)).catch(console.log)} type="button">
            REMOVE❌
          </button>
        </div>
      )}
    </>
  );
}

export default PostItem;
