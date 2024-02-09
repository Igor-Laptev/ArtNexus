import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchLoadCategories from '../../App/api.categories';
import type { CategoriesState } from './types';

const initialState: CategoriesState = {
  categories: [],
  error: undefined,
  // loading: true,
};

export const loadCategories = createAsyncThunk('categories/load', () => fetchLoadCategories());

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(loadCategories.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default categoriesSlice.reducer;
