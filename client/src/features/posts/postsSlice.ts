import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PostsState } from '../../redux/reducers/types';
import { fetchAddPost, fetchLoadPosts, fetchPostRemove } from '../../App/api';
import type { PostId, PostWithoutId, Post } from './types';

const initialState: PostsState = {
  posts: [],
  error: undefined,
  //   loading: true,
};

export const loadPosts = createAsyncThunk('posts/load', () => fetchLoadPosts());

export const addPost = createAsyncThunk('posts/add', (post: PostWithoutId) => fetchAddPost(post));

export const removePost = createAsyncThunk('posts/remove', (postId: PostId) =>
  fetchPostRemove(postId),
);

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(loadPosts.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
      .addCase(addPost.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(removePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post.id !== +action.payload);
      })
      .addCase(removePost.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;
