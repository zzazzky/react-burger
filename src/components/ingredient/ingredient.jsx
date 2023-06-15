import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';
import dataPropTypes from '../../utils/dataPropsType';
import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientStyles from './ingredient.module.css';
import { Link, useLocation } from 'react-router-dom';

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
    </Link>
  );
}

Ingredient.propTypes = {
  ingredient: dataPropTypes.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Ingredient;
