import React from 'react';
import type{ Category } from './types';


function CategoryEl ({category}: {category: Category}) : JSX.Element  {


  return (
    <div className="category">
 {category.title}
 
    </div>
  );
};

export default CategoryEl;
