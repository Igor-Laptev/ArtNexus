import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import categoriesSlice from '../features/categories/categoriesSlice';
import postsSlice from '../features/arts/postsSlice';
import authSlice from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    posts: postsSlice,
    categories: categoriesSlice,
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
// export default store;
