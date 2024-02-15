import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { UsersState } from './types';
import fetchLoadUsers from '../../App/api/api.users';
import { fetchLoadAvatar, fetchSignUp } from '../../App/api/api.auth';
import type { UserSignUp } from '../auth/type';
import { addUserAvatar } from '../posts/postsSlice';
import { signUp } from '../auth/authSlice';

const initialState: UsersState = {
  users: [],
  error: undefined,
};

export const loadUsers = createAsyncThunk('users/load', () => fetchLoadUsers());
// export const addUser = createAsyncThunk('users/add', (user: UserSignUp) => fetchSignUp(user));

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        console.log(state.users, '1');
        
      })
      .addCase(loadUsers.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(signUp.fulfilled, (state, action) => {console.log(action.payload, 'action payload');
      
        state.users.push(action.payload);
        console.log(state.users, '2');
      })
      .addCase(signUp.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addUserAvatar.fulfilled, (state, action) => {
        state.users = state.users.map((user) =>
          user.id === action.payload.id ? { ...user, avatar: action.payload.avatar } : user
        );
      })
      .addCase(addUserAvatar.rejected, (state, action) => {
        state.error = action.error.message;
      })
  },
});

export default usersSlice.reducer;
