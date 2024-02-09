import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from '../../redux/store';
import CategoryEl from './CategoryEl';
import { loadCategories } from './categoriesSlice';

function Categories(): JSX.Element {
  const categories = useSelector((store: RootState) => store.categories.categories);

  return (
    <div className="categories">
      {categories.map((category) => (
        <CategoryEl key={category.id} category={category} />
      ))}
    </div>
  );
}

export default Categories;
