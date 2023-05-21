import { useCallback, createRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import burgerIngridientStyles from './burger-ingredients.module.css';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import Ingredient from '../ingredient/ingredient';
import IngredientsCategory from '../ingredients-category/ingredients-category';
import Modal from '../modal/modal';
import {
  SET_CURRENT_INGREDIENT,
  DELETE_CURRENT_INGREDIENT,
} from '../../services/actions/ingredients';

function BurgerIngredients() {
  const dispatch = useDispatch();

  const [ingredientDetailsIsOpen, setIngredientDetailsIsOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState('buns');

  const bunsRef = createRef();
  const saucesRef = createRef();
  const mainsRef = createRef();
  const containerRef = createRef();
  const [containerRefTop, setContainerRefTop] = useState(null);

  useEffect(() => {
    setContainerRefTop(containerRef.current.getBoundingClientRect().top);
  }, []);

  const { buns, mains, sauces, constructorBun, constructorIngredients } =
    useSelector((store) => ({
      buns: store.ingredients.buns,
      mains: store.ingredients.mains,
      sauces: store.ingredients.sauces,
      constructorBun: store.constructor.bun,
      constructorIngredients: store.constructor.ingredients,
    }));

  const handleIngredientContainerScroll = () => {
    if (
      Math.abs(bunsRef.current.getBoundingClientRect().top - containerRefTop) <
        Math.abs(
          saucesRef.current.getBoundingClientRect().top - containerRefTop
        ) &&
      Math.abs(bunsRef.current.getBoundingClientRect().top - containerRefTop) <
        Math.abs(mainsRef.current.getBoundingClientRect().top - containerRefTop)
    ) {
      setCurrentTab('buns');
    } else if (
      Math.abs(
        saucesRef.current.getBoundingClientRect().top - containerRefTop
      ) <
        Math.abs(
          bunsRef.current.getBoundingClientRect().top - containerRefTop
        ) &&
      Math.abs(
        saucesRef.current.getBoundingClientRect().top - containerRefTop
      ) <
        Math.abs(mainsRef.current.getBoundingClientRect().top - containerRefTop)
    ) {
      setCurrentTab('sauces');
    } else {
      setCurrentTab('mains');
    }
  };

  const handleIngredientClick = useCallback((ingredient) => {
    dispatch({
      type: SET_CURRENT_INGREDIENT,
      payload: {
        ingredient: ingredient,
      },
    });
    setIngredientDetailsIsOpen(true);
  }, []);

  const closeIngredientDetails = useCallback(() => {
    setIngredientDetailsIsOpen(false);
    dispatch({
      type: DELETE_CURRENT_INGREDIENT,
    });
  }, []);

  return (
    <section className={burgerIngridientStyles.section}>
      <h1 className='mb-5 main-title text text_type_main-large'>
        Соберите бургер
      </h1>
      <div className={burgerIngridientStyles.ingredientsMenu}>
        <Tab
          value='Булки'
          active={currentTab === 'buns'}
          onClick={() =>
            bunsRef.current.scrollIntoView({ behavior: 'smooth' })
          }>
          Булки
        </Tab>
        <Tab
          value='Соусы'
          active={currentTab === 'sauces'}
          onClick={() =>
            saucesRef.current.scrollIntoView({ behavior: 'smooth' })
          }>
          Соусы
        </Tab>
        <Tab
          value='Начинки'
          active={currentTab === 'mains'}
          onClick={() =>
            mainsRef.current.scrollIntoView({ behavior: 'smooth' })
          }>
          Начинки
        </Tab>
      </div>
      <div
        className={burgerIngridientStyles.allIngridients}
        ref={containerRef}
        onScroll={handleIngredientContainerScroll}>
        <IngredientsCategory
          text='Булки'
          ref={bunsRef}>
          {buns.map((filteredItem) => {
            return (
              <li key={filteredItem._id}>
                {' '}
                <Ingredient
                  count={constructorBun._id === filteredItem._id && 1}
                  ingredient={filteredItem}
                  onClick={handleIngredientClick}
                />
              </li>
            );
          })}
        </IngredientsCategory>
        <IngredientsCategory
          text='Соусы'
          ref={saucesRef}>
          {sauces.map((filteredItem) => {
            return (
              <li key={filteredItem._id}>
                <Ingredient
                  count={
                    constructorIngredients.find(
                      (item) => item._id === filteredItem._id
                    ) &&
                    constructorIngredients.filter(
                      (item) => item._id === filteredItem._id
                    ).length
                  }
                  ingredient={filteredItem}
                  onClick={handleIngredientClick}
                />
              </li>
            );
          })}
        </IngredientsCategory>
        <IngredientsCategory
          text='Начинки'
          ref={mainsRef}>
          {mains.map((filteredItem) => {
            return (
              <li key={filteredItem._id}>
                {' '}
                <Ingredient
                  count={
                    constructorIngredients.filter(
                      (item) => item._id === filteredItem._id
                    ).length
                  }
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
          title='Детали ингредиента'>
          <IngredientDetails />
        </Modal>
      )}
    </section>
  );
}

export default BurgerIngredients;
