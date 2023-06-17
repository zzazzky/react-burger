import { useCallback, createRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import burgerIngridientStyles from './burger-ingredients.module.css';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import Ingredient from '../ingredient/ingredient';
import IngredientsCategory from '../ingredients-category/ingredients-category';
import Modal from '../../components/modal/modal';
import { useNavigate } from 'react-router-dom';

function BurgerIngredients() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [currentTab, setCurrentTab] = useState('buns');

  const bunsRef = createRef();
  const saucesRef = createRef();
  const mainsRef = createRef();
  const containerRef = createRef();
  const [containerRefTop, setContainerRefTop] = useState(null);

  useEffect(() => {
    setContainerRefTop(containerRef.current.getBoundingClientRect().top);
  }, []);

  const buns = useSelector((store) => store.ingredients.buns);

  const mains = useSelector((store) => store.ingredients.mains);

  const sauces = useSelector((store) => store.ingredients.sauces);

  const constructorBun = useSelector((store) => store.constructor.bun);

  const constructorIngredients = useSelector(
    (store) => store.constructor.ingredients
  );

  const currentIngredient = useSelector(
    (store) => store.ingredients.currentIngredient
  );

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
      type: 'SET_CURRENT_INGREDIENT',
      payload: {
        ingredient: ingredient._id,
      },
    });
  }, []);

  const closeIngredientDetails = useCallback(() => {
    dispatch({
      type: 'DELETE_CURRENT_INGREDIENT',
    });
    navigate('/');
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
          {buns?.map((filteredItem) => {
            return (
              <li key={filteredItem?._id}>
                {' '}
                <Ingredient
                  count={constructorBun?._id === filteredItem?._id && 1}
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
          {sauces?.map((filteredItem) => {
            return (
              <li key={filteredItem?._id}>
                <Ingredient
                  count={
                    constructorIngredients?.find(
                      (item) => item?._id === filteredItem?._id
                    ) &&
                    constructorIngredients?.filter(
                      (item) => item?._id === filteredItem?._id
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
          {mains?.map((filteredItem) => {
            return (
              <li key={filteredItem?._id}>
                {' '}
                <Ingredient
                  count={
                    constructorIngredients?.filter(
                      (item) => item?._id === filteredItem?._id
                    ).length
                  }
                  ingredient={filteredItem}
                  onClick={handleIngredientClick}
                />
              </li>
            );
          })}
        </IngredientsCategory>
        {currentIngredient && (
          <Modal onClose={closeIngredientDetails}>
            <IngredientDetails />
          </Modal>
        )}
      </div>
    </section>
  );
}

export default BurgerIngredients;
