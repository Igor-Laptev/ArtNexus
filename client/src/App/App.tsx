import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../features/main/MainPage';
import NavBar from '../features/navbar/NavBar';
import SignUp from '../features/auth/SignUp';
import SignIn from '../features/auth/SignIn';
import PostPage from '../features/arts/PostPage';
import LikePage from '../features/likes/LikesPage';

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<MainPage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/:postId" element={<PostPage />} />
          <Route path="/favorites" element={<LikePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
