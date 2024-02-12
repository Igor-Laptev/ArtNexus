import React from 'react';
import type { Comment } from './type';

function CommentEl({ comment }: { comment: Comment }): JSX.Element {
  console.log(comment);
  return (
    <div className="author">
      <div className="">
        <div>
          <img src={comment.User.avatar} style={{ width: '30px' }} alt="" />
        </div>
        <div>{comment.User.name}</div>
      </div>
      <p style={{ color: 'white' }}>{comment.text}</p>
    </div>
  );
}

export default CommentEl;
