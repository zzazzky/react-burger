import { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import dataPropTypes from '../../utils/dataPropsType';
import burgerIngridientStyles from './burger-ingredients.module.css';
import { useState } from 'react';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import Ingredient from '../ingredient/ingredient';
import IngredientsCategory from '../ingredients-category/ingredients-category';
import Modal from '../modal/modal';

function BurgerIngredients(props) {
  const [ingredientDetailsIsOpen, setIngredientDetailsIsOpen] = useState(false);
  const [currentIngredient, setCurrentIngredient] = useState(null);

  const { buns, mains, sauce } = useMemo(() => {
    return {
      buns: props.data.filter((item) => item.type === 'bun'),
      mains: props.data.filter((item) => item.type === 'main'),
      sauce: props.data.filter((item) => item.type === 'sauce'),
    };
  }, [JSON.stringify(props.data)]);

  const handleIngredientClick = useCallback((ingredient) => {
    setCurrentIngredient(ingredient);
    setIngredientDetailsIsOpen(true);
  }, []);

  const closeIngredientDetails = useCallback(() => {
    setIngredientDetailsIsOpen(false);
  }, []);

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
        <IngredientsCategory text='Булки'>
          {buns.map((filteredItem) => {
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
        </IngredientsCategory>
        <IngredientsCategory text='Соусы'>
          {sauce.map((filteredItem) => {
            return (
              <li key={filteredItem._id}>
                <Ingredient
                  ingredient={filteredItem}
                  onClick={handleIngredientClick}
                />
              </li>
            );
          })}
        </IngredientsCategory>
        <IngredientsCategory text='Начинки'>
          {mains.map((filteredItem) => {
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
        </IngredientsCategory>
      </div>
      {ingredientDetailsIsOpen && (
        <Modal
          onClose={closeIngredientDetails}
          title='Детали ингридиента'>
          <IngredientDetails ingredient={currentIngredient} />
        </Modal>
      )}
    </section>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(dataPropTypes.isRequired).isRequired,
};

export default BurgerIngredients;
