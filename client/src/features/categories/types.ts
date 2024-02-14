import type { Post } from '../posts/types';

export type Category = {
  id: number;
  title: string;
  img: string;
  Posts: Post[];
};

export type CategoryId= Category['id'];

export type CategoriesState = {
  categories: Category[];
  error: string | undefined;
};
