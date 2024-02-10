import React from 'react';
import PostsList from '../posts/PostsListPage';
import Categories from '../categories/Categories';
import AddPostForm from '../posts/AddPostForm';

function MainPage(): JSX.Element {
  return (
    <>
      {/* <div className="main-container">
        <div className="themes-container"></div>
        <div className="categories-container"></div> */}
      <div className="posts-container">
        <h1>Main Page</h1>
        <PostsList />
        <Categories />
        <AddPostForm/>
      </div>
      {/* <div className="trends-container"></div> */}
    </>
  );
}

export default MainPage;
