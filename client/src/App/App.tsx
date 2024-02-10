import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../features/main/MainPage';
import NavBar from '../features/navbar/NavBar';
import SignUp from '../features/auth/SignUp';
import SignIn from '../features/auth/SignIn';
// import PostPage from '../features/arts/PostPage';
import LikePage from '../features/likes/LikesPage';

import { loadCategories } from '../features/categories/categoriesSlice';
import { loadPosts } from '../features/posts/postsSlice';
import { useAppDispatch } from '../redux/store';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadPosts()).catch(console.log);
    dispatch(loadCategories()).catch(console.log);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<MainPage />} />

          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          {/* <Route path="/:postId" element={<PostPage />} /> */}
          <Route path="/favorites" element={<LikePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
//asdasdasd
