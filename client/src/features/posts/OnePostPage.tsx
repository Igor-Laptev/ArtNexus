import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import type { RootState } from '../../redux/store';

function OnePostPage(): JSX.Element {
  const { postId } = useParams();
  const post = useSelector((store: RootState) => store.posts.posts).find(
    (pst) => pst.id === +postId,
  );
  const navigate = useNavigate();
  return (
    <div className="">
      <h2>{post?.title}</h2>
      <p>{post?.description}</p>
      {post?.Gallery &&
        post.Gallery.Arts &&
        post.Gallery.Arts.map((art) => (
          <div
            key={art.id}
            className="art"
            style={{
              width: '400px',
              height: '400px',
              backgroundImage: `url(${art.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
        <p style={{ 
  color: "white",
  textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)"
}}>
  {art.title}
</p>
          </div>
        ))}
        <button type="button" onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default OnePostPage;
