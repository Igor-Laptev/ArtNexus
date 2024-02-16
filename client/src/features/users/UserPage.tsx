/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppDispatch, type RootState } from '../../redux/store';
import PostItem from '../posts/PostItem';
import AddPostForm from '../posts/AddPostForm';
import { addUserAvatar, removePost } from '../posts/postsSlice';
import './styles.css';

function UserPage(): JSX.Element {
  const { userId } = useParams();
  const user = useSelector((store: RootState) =>
    store.users.users.find((usr) => usr.id === +userId),
  );
  console.log(user, 'userrrrrrrr');

  const owner = useSelector((store: RootState) => store.auth.auth);

  const posts = useSelector((store: RootState) => store.posts.posts).filter(
    (post) => post.User.id === user?.id,
  );
  console.log(posts, 'postssssssss');

  const dispatch = useAppDispatch();
  const [addPost, setAddPost] = useState(false);
  const [addAvatar, setAddAvatar] = useState(false);
  const [avatar, setAvatar] = useState<FileList | null>(null);
  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault();
    if (!avatar) return;
    const formData = new FormData();
    formData.append('avatar', avatar[0]);
    dispatch(addUserAvatar(formData)).catch(console.log);
    setAddAvatar(false);
  }

  if (!user) {
    return <div>Such user not found</div>;
  }
  return (
    <div className="container-user-page">
      <div className="userInfo">
        {/* <div> */}
        <div className="userAvatar">
          <img src={user.avatar} alt="" />
        </div>
        {/* </div> */}
        <div className="user-name-btn">
          <h1>{user.name}</h1>
          {owner && (
            <div className="add-post-form">
              <button className="btn" type="button" onClick={() => setAddAvatar(true)}>
                ✍🏻
              </button>
              <button
                className="btn-secondary modal-button"
                type="button"
                onClick={() => setAddPost(true)}
              >
                Add post
              </button>
            </div>
          )}
        </div>
      </div>
      {addPost && <AddPostForm setAddpost={setAddPost} />}
      {addAvatar && (
        <form className="avatarAddForm" onSubmit={handleSubmit}>
          <input
            type="file"
            name="avatar"
            id="avatar"
            onChange={(e) => setAvatar(e.target.files)}
          />
          <button className="modal-button" type="submit">Add</button>
          <button className="close-button" type="button" onClick={() => setAddAvatar(false)}>
            ✖
          </button>
        </form>
      )}
      <div className="all-post-container">
        {posts &&
          posts.map((post) => (
            <div key={post.id}>
              <PostItem post={post} />
              {owner?.id === user.id && (
                <div className="reduct">
                  <button
                    className="btn-secondary modal-button"
                    type="button"
                    onClick={() => dispatch(removePost(post.id)).catch(console.log)}
                  >
                    Delete
                  </button>
                  {/* <button type="button">Edit</button> */}
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default UserPage;
