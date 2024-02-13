import React from 'react';
import type { Category } from './types';
import './styles.css';

function CategoryEl({ category }: { category: Category }): JSX.Element {
  return (
    <div className="category">
      {category.title}
      <img className="img" src={`${category.img}`} alt="" />
    </div>
  );
}

export default CategoryEl;
