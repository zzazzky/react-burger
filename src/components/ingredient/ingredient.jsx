import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';
import dataPropTypes from '../../utils/dataPropsType';
import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientStyles from './ingredient.module.css';

function Ingredient({ ingredient, count, onClick }) {
  function handleIngredientClick() {
    onClick(ingredient);
  }

  const [{ isDrag }, dragRef] = useDrag({
    type: 'ingredient',
    item: ingredient,
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  return (
    <div
      className={
        isDrag
          ? `${ingredientStyles.containerDragging} pb-6`
          : `${ingredientStyles.container} pb-6`
      }
      onClick={handleIngredientClick}
      ref={dragRef}>
      {count > 0 && (
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
    </div>
  );
}

Ingredient.propTypes = {
  ingredient: dataPropTypes.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Ingredient;
