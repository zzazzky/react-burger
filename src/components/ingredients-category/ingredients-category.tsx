import React, { RefObject } from 'react';
import { forwardRef } from 'react';
import IngridientsCategoryStyles from './ingredients-category.module.css';

interface IIngredientsCategoryProps {
  text: string;
  children: React.ReactNode;
}

const IngredientsCategory = forwardRef<
  HTMLDivElement,
  IIngredientsCategoryProps
>((props, ref) => {
  return (
    <>
      <h3
        ref={ref}
        className='text text_type_main-medium mt-10'>
        {props.text}
      </h3>
      <ul
        className={`${IngridientsCategoryStyles.ingredientsContainer} pl-4 pr-2`}>
        {props.children}
      </ul>
    </>
  );
});

export default IngredientsCategory;
