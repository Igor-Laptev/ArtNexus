import type { Category } from '../features/categories/types';

const fetchLoadCategories = async (): Promise<Category[]> => {
  const res = await fetch('/api/categories');
  const data: { categories: Category[]; message: string } = await res.json();
  return data.categories;
};

export default fetchLoadCategories;
