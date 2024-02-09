import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthState, UserSignIn, UserSignUp } from './type';
import { fetchCheckUser, fetchLogOut, fetchSignIn, fetchSignUp } from '../../App/api.auth';

const initialState: AuthState = {
  auth: undefined,
  error: undefined,
};

export const signUp = createAsyncThunk('auth/sign-up', (user: UserSignUp) => fetchSignUp(user));

export const signIn = createAsyncThunk('auth/login', (user: UserSignIn) => fetchSignIn(user));

export const checkUser = createAsyncThunk('auth/check', () => fetchCheckUser());

export const logOut = createAsyncThunk('auth/logout', () => fetchLogOut());

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        state.auth = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.auth = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(checkUser.fulfilled, (state, action) => {
        state.auth = action.payload;
      })
      .addCase(checkUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.auth = undefined;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;
//////