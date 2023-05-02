import PropTypes from 'prop-types';
import dataPropTypes from '../../utils/dataPropsType';
import burgerIngridientStyles from './burger-ingredients.module.css';
import { useState } from 'react';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import Ingredient from '../ingredient/ingredient';

function BurgerIngredients(props) {
  const [ingredientDetailsIsOpen, setIngredientDetailsIsOpen] = useState(false);
  const [currentIngredient, setCurrentIngredient] = useState({});

  function handleIngredientClick(ingredient) {
    setCurrentIngredient(ingredient);
    setIngredientDetailsIsOpen(true);
  }

  function closeIngredientDetails() {
    setIngredientDetailsIsOpen(false);
  }
  return (
    <section className={burgerIngridientStyles.section}>
      <h1 className='mb-5 main-title text text_type_main-large'>
        Соберите бургер
      </h1>
      <div className={burgerIngridientStyles.ingredientsMenu}>
        <Tab
          value='Булки'
          active={true}>
          Булки
        </Tab>
        <Tab
          value='Соусы'
          active={false}>
          Соусы
        </Tab>
        <Tab
          value='Начинки'
          active={false}>
          Начинки
        </Tab>
      </div>
      <div className={burgerIngridientStyles.allIngridients}>
        <h3 className='text text_type_main-medium mt-10'>Булки</h3>
        <ul
          className={`${burgerIngridientStyles.ingredientsContainer} pl-4 pr-2`}>
          {props.data
            .filter((item) => item.type === 'bun')
            .map((filteredItem) => {
              return (
                <li key={filteredItem._id}>
                  {' '}
                  <Ingredient
                    ingredient={filteredItem}
                    onClick={handleIngredientClick}
                  />
                </li>
              );
            })}
        </ul>
        <h3 className='text text_type_main-medium mt-10'>Соусы</h3>
        <ul
          className={`${burgerIngridientStyles.ingredientsContainer} pl-4 pr-2`}>
          {props.data
            .filter((item) => item.type === 'sauce')
            .map((filteredItem) => {
              return (
                <li key={filteredItem._id}>
                  <Ingredient
                    ingredient={filteredItem}
                    onClick={handleIngredientClick}
                  />
                </li>
              );
            })}
        </ul>
        <h3 className='text text_type_main-medium mt-10 mb-6'>Начинки</h3>
        <ul
          className={`${burgerIngridientStyles.ingredientsContainer} pl-4 pr-2`}>
          {props.data
            .filter((item) => item.type === 'main')
            .map((filteredItem) => {
              return (
                <li key={filteredItem._id}>
                  {' '}
                  <Ingredient
                    ingredient={filteredItem}
                    onClick={handleIngredientClick}
                  />
                </li>
              );
            })}
        </ul>
      </div>
      {ingredientDetailsIsOpen && (
        <IngredientDetails
          onClose={closeIngredientDetails}
          ingredient={currentIngredient}
        />
      )}
    </section>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(dataPropTypes).isRequired,
};

export default BurgerIngredients;
