import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import type { Post } from '../posts/types';
import CommentEl from './CommentEl';
import { addComment } from '../posts/postsSlice';

function Comments({ post }: { post: Post }): JSX.Element {
  const dispatch = useAppDispatch();
  const [text, setText] = useState('');
  return (
    <div>
      <div className="postInfo">
        <div className="user">
          <div>
          <Link to={`/users/${post.User.id}`}><img src={post.User.avatar} alt="" style={{ width: '50px' }} /></Link>
          </div>
          <Link to={`/users/${post.User.id}`}><p style={{ color: 'white' }}>{post.User.name}</p></Link>
        </div>
        <div className="info">
          <div >
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </div>
          <div className="like">
            <button type="button">
              ❤️{post.Likes.length}💬 {post.Comments.length}
            </button>
          </div>
        </div>
      </div>
   <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addComment({ text, post_id: post.id })).catch(console.log);
          setText('')
        }}
      >
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">✎</button>
      </form>
      {[...post.Comments].reverse().map((comment) => (
  <CommentEl key={comment.id} comment={comment} />
))}
   
    </div>
  );
}

export default Comments;
