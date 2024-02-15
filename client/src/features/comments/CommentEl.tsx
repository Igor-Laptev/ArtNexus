import React from 'react';
import type { Comment } from './type';

function CommentEl({ comment }: { comment: Comment }): JSX.Element {
  const formattedDate = new Date(comment.createdAt);
  const dateString = formattedDate.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  const timeString = formattedDate.toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
  });
  return (
    <div className="author" style={{backgroundColor: 'white', marginBottom: '5px', width: '25%' }}>
      <div className="">
        <div style={{borderRadius: '50%'}}>
          <img src={comment.User.avatar} style={{ width: '30px' }} alt="" />
        </div>
        <div>{comment.User.name}</div>  <span className="time">{timeString} /{dateString}/ </span>
      </div>
      <p style={{ color: 'black' }}>{comment.text}</p>
    
    </div>
  );
}

export default CommentEl;
