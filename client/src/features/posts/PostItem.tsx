
import React from 'react';
import { Link } from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';
import { CSSTransition } from 'react-transition-group';


import type { Post } from './types';
import './styles.css';
import './tooltipStyles.css';
import { current } from '@reduxjs/toolkit';
// import { useAppDispatch } from '../../redux/store';

function PostPage({ post }: { post: Post }): JSX.Element {
  // const dispatch = useAppDispatch();

<!--   const formattedDate = new Date(post.createdAt);
  const dateString = formattedDate.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  const timeString = formattedDate.toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
  }); -->


  const firstArt = post.Gallery.Arts[0].src;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const [showToolTip, setShowToolTip] = useState(false);
  const onMouseEnterHandler = () => {
    setShowToolTip(true);
  };

  const onMouseLeaveHandler = () => {
    setShowToolTip(false);
  };
  return (
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
              backgroundSize: 'contain',
              backgroundSize: 'cover',
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
              backgroundSize: 'contain',
              backgroundSize: 'cover',
              width: '100%',
              height: '100%',
            }}
          ></div>
        )}
      </div>

    </div>
   
  );
}

export default PostPage;