import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthState, UserSignUp } from './type';
import { fetchCheckUser, fetchSignUp } from '../../App/api';

const initialState: AuthState = {
  auth: undefined,
  error: undefined,
};

export const signUp = createAsyncThunk('auth/sign-up', (user: UserSignUp) => fetchSignUp(user));

export const checkUser = createAsyncThunk('auth/check', () => fetchCheckUser());

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUp.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;
