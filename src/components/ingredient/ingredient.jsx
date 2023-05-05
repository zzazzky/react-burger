import PropTypes from 'prop-types';
import dataPropTypes from '../../utils/dataPropsType';
import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientStyles from './ingredient.module.css';

function Ingredient(props) {
  function handleIngredientClick() {
    props.onClick(props.ingredient);
  }

  return (
    <div
      className={`${ingredientStyles.container} pb-6`}
      onClick={handleIngredientClick}>
      {
        //счетчик захардкоржен для сдачи верстки, т.к. не реализовано добавление ингредиентов в конструктор
      }
      <Counter
        count={1}
        size='default'
        extraClass='m-1'
      />
      <img
        className={ingredientStyles.image}
        alt={props.ingredient.name}
        src={props.ingredient.image}
      />
      <div className={ingredientStyles.price}>
        <p className='text text_type_digits-default mt-1 mb-1 mr-2'>
          {props.ingredient.price}
        </p>
        <CurrencyIcon type='primary' />
      </div>
      <p className='text text_type_main-default'>{props.ingredient.name}</p>
    </div>
  );
}

Ingredient.propTypes = {
  ingredient: dataPropTypes.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Ingredient;
