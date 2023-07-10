import React from 'react';
import { useSelector } from '../../types/hooks';
import burgerMakerStyles from './burger-maker.module.css';
import BurgerConstructor from '../../components/burger-constructor/burger-constructor';
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const BurgerMaker: React.FC = () => {
  const ingredientsRequest = useSelector(
    (store) => store.ingredients.ingredientsRequest
  );

  const ingredientsFeedFailed = useSelector(
    (store) => store.ingredients.ingredientsFeedFailed
  );

  const replacementText: string = !ingredientsFeedFailed
    ? 'Ваши бургеры летят к вам с края Вселенной'
    : 'Упс, что-то пошло не так и ваши бургеры улетели в соседнюю галактику! Попробуйте перезагрузить страницу, вдруг они уже прилетели';

  if (!ingredientsRequest && !ingredientsFeedFailed) {
    return (
      <>
        <div className={burgerMakerStyles.container}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
        </div>
      </>
    );
  } else {
    return (
      <section className={burgerMakerStyles.textContainer}>
        <p className='text text_type_main-large'>{replacementText}</p>
      </section>
    );
  }
};

export default BurgerMaker;
