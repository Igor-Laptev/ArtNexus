import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PostsState } from '../../redux/reducers/types';
import {
  fetchAddPost,
  fetchLoadPosts,
  fetchModeratePost,
  fetchPostRemove,
} from '../../App/api.posts';
import type { PostId, PostWithoutId, Post } from './types';
import fetchCreateComment from '../../App/api.comment';

const initialState: PostsState = {
  posts: [],
  error: undefined,
  //   loading: true,
};

export const loadPosts = createAsyncThunk('posts/load', () => fetchLoadPosts());

export const addPost = createAsyncThunk('posts/add', (formData: FormData) =>
  fetchAddPost(formData),
);

export const removePost = createAsyncThunk('posts/remove', (postId: PostId) =>
  fetchPostRemove(postId),
);

export const addComment = createAsyncThunk(
  'comment/add',
  async ({ text, post_id }: { text: string; post_id: PostId }) =>
    fetchCreateComment({ text, post_id }),
);

export const moderatePost = createAsyncThunk('posts/moderate', (postId: PostId) =>
  fetchModeratePost(postId),
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
      })
      .addCase(moderatePost.fulfilled, (state, action) => {
        console.log(state);

        if (action.payload.message === 'success') {
          state.posts = state.posts.map(
            (post) => post.id === action.payload.id && { ...post, isModerated: true },
          );
        }
        console.log(state.posts);
      })
      .addCase(moderatePost.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.posts
          .find((post) => post.id === action.payload.post_id)
          .Comments.push(action.payload);
      })
      .addCase(addComment.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;
