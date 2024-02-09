import type { Post } from '../arts/types';

export type Category = {
  id: number;
  title: string;
  img: string;
  Posts: Post[];
};

export type CategoriesState = {
  categories: Category[];
  error: string | undefined;
};
