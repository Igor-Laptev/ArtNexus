import React from 'react';
import { Link} from 'react-router-dom';
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
    <div className="author" style={{backgroundColor: 'white', marginBottom: '5px' }}>
      <div className="comment-user">
        <div style={{borderRadius: '50%'}}>
          <img src={comment.User.avatar} style={{ width: '30px' }} alt="" />
        </div>
        
        <div className='user-name'><Link to={`/users/${comment.User.id}`}>{comment.User.name}</Link></div>  
      </div>
      <p className='comment-t' style={{ color: 'black' }}>{comment.text}</p>
      <span className="time">{timeString} /{dateString}/ </span>
    
    </div>
  );
}

export default CommentEl;
