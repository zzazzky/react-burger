import React from 'react';
import { useDrag } from 'react-dnd';
import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientStyles from './ingredient.module.css';
import { Link, useLocation } from 'react-router-dom';
import { IIngredient } from '../../types/store-interface';

interface IIngredientProps {
  ingredient: IIngredient;
  onClick: (ingredient: IIngredient) => void;
  count: number | null;
}

const Ingredient: React.FC<IIngredientProps> = ({
  ingredient,
  count,
  onClick,
}) => {
  function handleIngredientClick(): void {
    onClick(ingredient);
  }

  const [{ isDrag }, dragRef] = useDrag({
    type: 'ingredient',
    item: ingredient,
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  const location = useLocation();

  return (
    <Link
      to={`/ingredients/${ingredient._id}`}
      state={{ background: location }}
      className={
        isDrag
          ? `${ingredientStyles.containerDragging} pb-6`
          : `${ingredientStyles.container} pb-6`
      }
      onClick={handleIngredientClick}
      ref={dragRef}>
      {count && count > 0 && (
        <Counter
          count={count}
          size='default'
          extraClass='m-1'
        />
      )}
      <img
        className={ingredientStyles.image}
        alt={ingredient.name}
        src={ingredient.image}
      />
      <div className={ingredientStyles.price}>
        <p className='text text_type_digits-default mt-1 mb-1 mr-2'>
          {ingredient.price}
        </p>
        <CurrencyIcon type='primary' />
      </div>
      <p className='text text_type_main-default'>{ingredient.name}</p>
    </Link>
  );
};

export default Ingredient;
