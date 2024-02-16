import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PostsState } from '../../redux/reducers/types';
import {
  fetchAddPost,
  fetchIsAdult,
  fetchLoadPosts,
  fetchModeratePost,
  fetchPostRemove,
} from '../../App/api/api.posts';
import type { PostId } from './types';
import fetchCreateComment from '../../App/api/api.comment';
import { fetchLike } from '../../App/api/api.likes';
import { fetchLoadAvatar } from '../../App/api/api.auth';

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

export const moderatePost = createAsyncThunk('posts/moderate', ({id, isModerated}: {id: PostId, isModerated: boolean}) =>
  fetchModeratePost( id, isModerated ),
);
export const addUserAvatar = createAsyncThunk('posts/addAvatar', (formData: FormData) =>
fetchLoadAvatar(formData));

export const isAdultPost = createAsyncThunk('posts/isAdult', ({id, isAdult}: {id: PostId, isAdult: boolean}) =>
  fetchIsAdult( id, isAdult ));

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
    adultPost: (state) => {
      state.posts = state.posts.map((post) => post.isAdult === true ? {...post, isAdult: false} : post);
      state.copyPosts = state.posts;
    },
// setAdult: (state, action) => {
//   state.posts = state.copyPosts;
//   state.posts = state.posts.map((post)=>post.id===action.payload ? {...post , isAdult: !post.isAdult}:post)
// },
// setModerate: (state, action) => {
//   state.posts = state.copyPosts;
//   state.posts = state.posts.map((post)=>post.id===action.payload ? {...post , isModerated: !post.isModerated}:post)
// }

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
            post.id === +action.payload.id ? { ...post, isModerated: action.payload.isModerated } : post,
          );
          state.copyPosts = state.copyPosts.map((post) =>
            post.id === +action.payload.id ? { ...post, isModerated: true } : post,
          );
        }
      })
      .addCase(moderatePost.rejected, (state, action) => {
        state.error = action.error.message;
      })
    .addCase(addComment.fulfilled, (state, action) => {
  const targetPost = state.posts.find((post) => post.id === action.payload.post_id);
  const targetCopyPost = state.copyPosts.find((post) => post.id === action.payload.post_id);

  if (targetPost) {
    targetPost.Comments.push(action.payload);
  }

  if (targetCopyPost) {
    targetCopyPost.Comments.push(action.payload);
  }
})
      .addCase(addComment.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(likePost.fulfilled, (state, action) => {console.log(action.payload);
      
const targetPost = state.posts.find((post) => post.id === action.payload.post_id);
const target = targetPost?.Likes.find((like) => like.user_id === action.payload.user_id);
if (target) {
  targetPost?.Likes.splice(targetPost?.Likes.indexOf(target), 1);
}else{
  targetPost?.Likes.push(action.payload)
}
state.copyPosts=state.posts
      })
      
      .addCase(likePost.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addUserAvatar.fulfilled, (state, action) => {
        state.posts = state.posts.map((post) => post.User.id===action.payload.id ? {...post, User: {...post.User, avatar: action.payload.avatar}} : post)
        state.copyPosts = state.copyPosts.map((post) => post.User.id===action.payload.id ? {...post, User: {...post.User, avatar: action.payload.avatar}} : post)
      })
      .addCase(addUserAvatar.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(isAdultPost.fulfilled, (state,action)=>{
        state.posts = state.posts.map((post)=>post.id===+action.payload.id ? {...post, isAdult: action.payload.isAdult} : post);
        state.copyPosts = state.copyPosts.map((post)=>post.id===+action.payload.id ? {...post, isAdult: action.payload.isAdult} : post);
      })
      .addCase(isAdultPost.rejected, (state, action) => {
        state.error = action.error.message;
      })
  },
});

export default postsSlice.reducer;

export const { filterPosts, filterIsAdult, filterToModerate, setEquel, adultPost} =
  postsSlice.actions;

