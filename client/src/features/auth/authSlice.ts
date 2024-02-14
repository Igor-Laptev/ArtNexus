import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCheckUser, fetchLogOut, fetchSignIn, fetchSignUp } from '../../App/api/api.auth';
import type { AuthState, UserSignIn, UserSignUp } from './type';

const initialState: AuthState = {
  auth: undefined,
  error: undefined,
};

export const checkUser = createAsyncThunk('auth/check', () => fetchCheckUser());
export const signUp = createAsyncThunk('auth/sign-up', (user: UserSignUp) => fetchSignUp(user));


export const signIn = createAsyncThunk(
  'api/sign-in',

  async (user: UserSignIn, { rejectWithValue }) => {
    try {
      const response = await fetchSignIn(user);
      console.log('signIn response:', response); // Логирование успешного ответа
      return response;
    } catch (error) {
      console.error('signIn error:', error); // Логирование ошибки
      return rejectWithValue(error instanceof Error ? error.message : 'An unknown error occurred');
    }
  },
);

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
      .addCase(checkUser.fulfilled, (state, action) => {
        state.auth = action.payload;
      })
      .addCase(checkUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
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
        console.error('SignIn failed:', action.error.message); // Логирование ошибки
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
