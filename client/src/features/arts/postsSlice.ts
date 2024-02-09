import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PostsState } from '../../redux/reducers/types';

const initialState: PostsState = {
  posts: [],
  error: undefined,
  loading: true,
};
