import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './app.css';
import AppHeader from '../app-header/app-header';
import BurgerMaker from '../burger-maker/burger-maker';
import { getIngredientsFeed } from '../../services/actions/ingredients';

function App() {
  const dispatch = useDispatch();

  const { ingredientsRequest, ingredientsFeedFailed } = useSelector(
    (store) => ({
      ingredientsRequest: store.ingredients.ingredientsRequest,
      ingredientsFeedFailed: store.ingredients.ingredientsFeedFailed,
    })
  );

  const replacementText = !ingredientsFeedFailed
    ? 'Ваши бургеры летят к вам с края Вселенной'
    : 'Упс, что-то пошло не так и ваши бургеры улетели в соседнюю галактику! Попробуйте перезагрузить страницу, вдруг они уже прилетели';

  useEffect(() => {
    dispatch(getIngredientsFeed());
  }, []);

  return (
    <div className='app'>
      <AppHeader />
      <main className='pt-10 pb-10 main'>
        {
          //компонент страницы для того, чтобы не переделывать  структуру при реализации роутера
        }
        <BurgerMaker
          isLoaded={!ingredientsRequest && !ingredientsFeedFailed}
          replacementText={replacementText}
        />
      </main>
    </div>
  );
}

export default App;
