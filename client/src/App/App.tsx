import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../features/main/MainPage';
import NavBar from '../features/navbar/NavBar';
import LikePage from '../features/likes/LikesPage';
import { useAppDispatch } from '../redux/store';
import { loadCategories } from '../features/categories/categoriesSlice';
import { loadPosts } from '../features/posts/postsSlice';
import OnePostPage from '../features/posts/OnePostPage';
import { checkUser } from '../features/auth/authSlice';
import ModeratorPage from '../features/admin/ModeratorPage';
import UserPage from '../features/users/UserPage';
import ReactModal from 'react-modal';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(checkUser()).catch(console.log);
    dispatch(loadPosts()).catch(console.log);
    dispatch(loadCategories()).catch(console.log);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<MainPage />} />
          <Route path="/moderator" element={<ModeratorPage />} />
          <Route path="/likes" element={<LikePage />} />
          <Route path="/posts/:postId" element={<OnePostPage />} />
          <Route path="/users/:userId" element={<UserPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
