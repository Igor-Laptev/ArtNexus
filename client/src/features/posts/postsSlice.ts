import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PostsState } from '../../redux/reducers/types';
import {
  fetchAddPost,
  fetchLoadPosts,
  fetchModeratePost,
  fetchPostRemove,
} from '../../App/api/api.posts';
import type { PostId } from './types';
import fetchCreateComment from '../../App/api/api.comment';
import { fetchLike } from '../../App/api/api.likes';

const initialState: PostsState = {
  posts: [],
  copyPosts: [],
  error: undefined,
  // categories:undefined
  //   loading: true,
};

export const loadPosts = createAsyncThunk('posts/load', () => fetchLoadPosts());

export const addPost = createAsyncThunk('posts/add', (formData: FormData) =>
  fetchAddPost(formData),
);

export const removePost = createAsyncThunk('posts/remove', (postId: PostId) =>
  fetchPostRemove(postId),
);

export const likePost = createAsyncThunk('posts/like', (postId: PostId) => fetchLike(postId));

export const addComment = createAsyncThunk(
  'comment/add',
  async ({ text, post_id }: { text: string; post_id: PostId }) =>
    fetchCreateComment({ text, post_id }),
);

export const moderatePost = createAsyncThunk('posts/moderate', (id: PostId) =>
  fetchModeratePost(id),
);

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    filterPosts: (state, action) => {
      state.posts = state.copyPosts;
      state.posts = state.posts.filter((post) => post.category_id === action.payload);
    },
    filterIsAdult: (state, action) => {
      state.posts = state.copyPosts;
      state.posts = state.posts.filter((post) => post.isAdult === action.payload);
    },
    filterToModerate: (state, action) => {
      state.posts = state.copyPosts;
      state.posts = state.posts.filter((post) => post.isModerated === action.payload);
    },
    setEquel: (state) => {
      state.posts = state.copyPosts;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.copyPosts = action.payload;
      })
      .addCase(loadPosts.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
        state.copyPosts.push(action.payload);
      })
      .addCase(addPost.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(removePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post.id !== +action.payload);
        state.copyPosts = state.copyPosts.filter((post) => post.id !== +action.payload);
      })
      .addCase(removePost.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(moderatePost.fulfilled, (state, action) => {
        if (action.payload.message === 'success') {
          state.posts = state.posts.map((post) =>
            post.id === +action.payload.id ? { ...post, isModerated: true } : post,
          );
        }
      })
      .addCase(moderatePost.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        const targetPost = state.posts.find((post) => post.id === action.payload.post_id);
        const copyPost = state.posts.find((post) => post.id === action.payload.post_id);
        if (targetPost) {
          targetPost.Comments.push(action.payload);
        }
        if (copyPost) {
          copyPost.Comments.push(action.payload);
        }
      })
      .addCase(addComment.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(likePost.fulfilled, (state, action) => {
        console.log(action.payload);

        state.posts.map((post) =>
          post.id === action.payload.post_id ? post.Likes.push(action.payload) : post,
        );
      })
      .addCase(likePost.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;
export const { filterPosts, filterIsAdult, filterToModerate, setEquel } = postsSlice.actions;
