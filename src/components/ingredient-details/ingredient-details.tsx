import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import ingredientDetailsStyle from './ingredient-details.module.css';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IIngredient, Istore } from '../../types/store-interface';

const IngredientDetails: React.FC = () => {
  const dispatch = useDispatch();

  const ingredient = useParams().ingredientId;
  const currentIngredient = useSelector<Istore, IIngredient | null>(
    (store) => store.ingredients.currentIngredient
  );

  const ingredientsFeedSuccess = useSelector<Istore, boolean>(
    (store) => store.ingredients.ingredientsFeedSuccess
  );
  useEffect(() => {
    if (!currentIngredient && ingredientsFeedSuccess) {
      dispatch({
        type: 'SET_CURRENT_INGREDIENT',
        payload: {
          ingredient: ingredient,
        },
      });
    }
  }, [ingredientsFeedSuccess]);

  useEffect(() => {}, [ingredient]);

  return (
    <div className={ingredientDetailsStyle.container}>
      <h2 className='text text_type_main-large mt-2'>Детали ингредиента</h2>
      <img
        alt={currentIngredient?.name}
        src={currentIngredient?.image}
        className={ingredientDetailsStyle.picture}
      />
      <p className='text text_type_main-medium mt-4'>
        {currentIngredient?.name}
      </p>
      <ul className={`${ingredientDetailsStyle.nutritional} mt-8 mb-5`}>
        <li
          key='calories'
          className={ingredientDetailsStyle.nutritionalItem}>
          <p className='text text_type_main-default text_color_inactive'>
            Калории, ккал
          </p>
          <p
            className={`${ingredientDetailsStyle.nutritionalNumber} text text_type_digits-default text_color_inactive mt-2`}>
            {currentIngredient?.calories}
          </p>
        </li>
        <li
          key='proteins'
          className={ingredientDetailsStyle.nutritionalItem}>
          <p className='text text_type_main-default text_color_inactive'>
            Белки, г
          </p>
          <p
            className={`${ingredientDetailsStyle.nutritionalNumber} text text_type_digits-default text_color_inactive mt-2`}>
            {currentIngredient?.proteins}
          </p>
        </li>
        <li
          key='fat'
          className={ingredientDetailsStyle.nutritionalItem}>
          <p className='text text_type_main-default text_color_inactive'>
            Жиры, г
          </p>
          <p
            className={`${ingredientDetailsStyle.nutritionalNumber} text text_type_digits-default text_color_inactive mt-2`}>
            {currentIngredient?.fat}
          </p>
        </li>
        <li
          key='carbohydrates'
          className={ingredientDetailsStyle.nutritionalItem}>
          <p className='text text_type_main-default text_color_inactive'>
            Углеводы, г
          </p>
          <p
            className={`text text_type_digits-default text_color_inactive mt-2`}>
            {currentIngredient?.carbohydrates}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default IngredientDetails;
