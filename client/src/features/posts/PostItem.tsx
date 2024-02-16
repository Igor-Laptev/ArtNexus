/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import type { Post, PostId } from './types';
import './styles.css';
import './tooltipStyles.css';
import 'animate.css';
import { isAdultPost, moderatePost, removePost, setAdult, setModerate } from './postsSlice';
import { type RootState, useAppDispatch } from '../../redux/store';
import Access from './Access';
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
  const [access, setAccess] = useState(false);
  const makePostAdult = (postId: PostId): void => {
    dispatch(setAdult(postId));
  };
  const makePostModerate = (postId: PostId): void => {
    dispatch(setModerate(postId));
  };

  return (
    <div className="container-pic">
      {access && <Access setAccess={setAccess} />}
      <NavLink to={!post.isAdult ? `posts/${post.id}` : '/'} onClick={() => setAccess(true)}>
        <div
          className="post-container"
          onMouseEnter={onMouseEnterHandler}
          onMouseLeave={onMouseLeaveHandler}
        >
          <div className="post-content item-box">
            {showToolTip && (
              <div className="modalka">
                <div className="animate__animated animate__slideInRight ptext">
                  <p>{post.title}</p>
                </div>
                <div
                  className={`tooltip ${post.isAdult ? 'blur-image' : ''}`}
                  style={{
                    // backgroundImage: 'lin'
                    backgroundImage: `url(${firstArt})`,
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    height: '100%',
                    borderRadius: '10%',
                  }}
                ></div>
              </div>
            )}
            {!showToolTip && (
              <div
                className={`cover ${post.isAdult ? 'blur-image' : ''}`}
                style={{
                  backgroundImage: `url(${firstArt})`,
                  backgroundRepeat: 'no-repeat',
                  borderRadius: '10%',
                  width: '100%',
                  height: '100%',
                }}
              />
            )}
          </div>
        </div>
      </NavLink>
      {/* <button onClick={() => dispatch(likePost(post.id)).catch(console.log)} type="button">
        Нравится
      </button> */}
      {user && user.isAdmin && (
        <div className="adminisration-pic">
          <button
            onClick={() => {
              dispatch(moderatePost({ id: post.id, isModerated: !post.isModerated })).catch(
                console.log,
              );
              makePostModerate(post.id);
            }}
            type="button"
            className="btn-secondary modal-button"
          >
            {!post.isModerated ? ' ✅' : ' ❔'}
          </button>
          <button
            onClick={() => {
              dispatch(isAdultPost({ id: post.id, isAdult: !post.isAdult })).catch(console.log);
              makePostAdult(post.id);
            }}
            type="button"
            className="btn-secondary modal-button"
          >
            {post.isAdult ? '👶🏻' : '🔞'}
          </button>

          <button
            onClick={() => dispatch(removePost(post.id)).catch(console.log)}
            type="button"
            className="btn-secondary modal-button"
          >
            ❌
          </button>
        </div>
      )}
    </div>
  );
}

export default PostItem;
