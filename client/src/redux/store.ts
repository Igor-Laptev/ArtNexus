import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import categoriesSlice from '../features/categories/categoriesSlice';

export const store = configureStore({
  reducer: {
    // posts: postsSlice,
    categories: categoriesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
