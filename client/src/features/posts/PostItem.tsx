import React from 'react';
import { Link } from 'react-router-dom';
import type { Post } from './types';
import './styles.css';
// import { useAppDispatch } from '../../redux/store';

function PostPage({ post }: { post: Post }): JSX.Element {
  // const dispatch = useAppDispatch();
  const formattedDate = new Date(post.createdAt);
  const dateString = formattedDate.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  const timeString = formattedDate.toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
  });
console.log(post.Gallery.Arts[0].src);

  return (
    <div className="post-container" style={{ backgroundImage: `${post.Gallery.Arts[0].src}`,backgroundSize: 'cover', backgroundPosition: 'center'  }}>
      <Link to={`/posts/${post.id}`}> <div className="post-content">
        <h1>{post.title}</h1>
        <h2>{post.description}</h2>
        <img src={post.Gallery.Arts[0].src} alt={post.Gallery.Arts[0].src} />
        <h3>{post.Category.title}</h3>
        <p>{dateString} ,<span className="time">{timeString}</span></p>
        <button type="button">Удалить</button>
      </div></Link>
    </div>
   
  );
}

export default PostPage;
