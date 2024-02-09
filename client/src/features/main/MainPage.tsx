import React from 'react';
import PostsList from '../arts/PostsList';

const MainPage = () => {
  return (
    <div className="main-container">
      <div className="themes-container"></div>
      <div className="categories-container"></div>
      <div className="posts-container">
        <h1>Main Page</h1>
        <PostsList />
      </div>
      <div className="trends-container"></div>
    </div>
  );
};

export default MainPage;
