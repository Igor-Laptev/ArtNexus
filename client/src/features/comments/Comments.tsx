import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import type { Post } from '../posts/types';
import type { Comment } from './type';
import CommentEl from './CommentEl';
import { addComment, likePost } from '../posts/postsSlice';
import './styles.css';

function Comments({ post }: { post: Post }): JSX.Element {
  const dispatch = useAppDispatch();
  const [text, setText] = useState('');

  return (
    <div>
      <div className="postInfo" style={{ backgroundColor: 'white' }}>
        <div className="user">
          <div className='user-ava'>
            <Link to={`/users/${post.User.id}`}>
              <img src={post.User.avatar} alt="" style={{ width: '50px' }} />
            </Link>
          </div>
          <Link to={`/users/${post.User.id}`}>
            <p className='user-named'>{post.User.name}</p>
          </Link>
        </div>
        <div className="info">
          <div>
            <p>{post.description}</p>
          </div>
          <div className="like">
            <button type="button" onClick={() => dispatch(likePost(post.id)).catch(console.log)}>
              ❤️{post.Likes.length}💬 {post.Comments.length}
            </button>
          </div>
        </div>
      </div>
      <form
        className="input"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addComment({ text, post_id: post.id })).catch(console.log);
          setText('');
        }}
      >
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">✎</button>
      </form>
      {[...post.Comments].reverse().map((comment: Comment) => (
        <CommentEl key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default Comments;
