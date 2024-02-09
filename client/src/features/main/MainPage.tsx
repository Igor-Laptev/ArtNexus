import React from 'react';
import PostsList from '../arts/PostsList';
import Categories from '../categories/Categories';

function MainPage(): JSX.Element {
  return (
    <>
      {/* <div className="main-container">
        <div className="themes-container"></div>
        <div className="categories-container"></div> */}
      <div className="posts-container">
        <h1>Main Page</h1>
        {/* <PostsList /> */}
        <Categories />
      </div>
      {/* <div className="trends-container"></div> */}
    </>
  );
}

export default MainPage;
