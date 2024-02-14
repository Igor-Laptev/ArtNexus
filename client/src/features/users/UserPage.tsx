import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppDispatch, type RootState } from '../../redux/store';
import PostItem from '../posts/PostItem';
import AddPostForm from '../posts/AddPostForm';
import { addUserAvatar } from '../posts/postsSlice';

function UserPage(): JSX.Element {
 
  const { userId } = useParams();
  const user = useSelector((store: RootState) =>
    store.posts.posts.find((post) => userId && post.user_id === +userId),
  )?.User;
  const owner = useSelector((store: RootState) => store.auth.auth);
  const posts = useSelector((store: RootState) =>
    store.posts.posts.filter((post) => userId && post.user_id === +userId),
  );
const dispatch = useAppDispatch();
  const[addPost, setAddPost] = useState(false)
const [addAvatar, setAddAvatar] = useState(false)
const[avatar, setAvatar] = useState<FileList | null>(null)
function handleSubmit(e: React.FormEvent):void {
  e.preventDefault();
  if(!avatar) return;
  const formData = new FormData();
  formData.append('avatar', avatar[0]);
dispatch(addUserAvatar(formData)).catch(console.log)
setAddAvatar(false)
}

  if (!user) {
    return <div>Such user not found</div>;
  }
  return (
    <div>
      <div className="userInfo">
        <div>
          <div className="userAvatar"><img src={user.avatar}  alt="" /></div>
          {owner && (
            <div>
              <button type="button" onClick={() => setAddAvatar(true)}>✍🏻</button>
              <button type='button' onClick={() => setAddPost(true)}>Add post</button>
            </div>
          )}
        </div>
        <h1>{user.name}</h1>
      </div>
      {addPost && <AddPostForm setAddpost={setAddPost}/>}
      {addAvatar && <form className='avatarAddForm' onSubmit={handleSubmit}><input type="file" name="avatar" id="avatar" onChange={(e)=> setAvatar(e.target.files)} /><button type="submit">Add</button><button type="button" onClick={() => setAddAvatar(false)}>✖</button></form>}
      <div className="all-post-container">
        {posts.map((post) => (
          <div key={post.id}>
            <PostItem post={post} />
            {owner?.id === user.id && (
              <div className="reduct">
                <button type="button">Delete</button>
                <button type="button">Edit</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserPage;
