import { useSelector } from 'react-redux';
import ingredientDetailsStyle from './ingredient-details.module.css';

function IngredientDetails() {
  const currentIngredient = useSelector(
    (store) => store.ingredients.currentIngredient
  );

  return (
    <>
      <img
        alt={currentIngredient.name}
        src={currentIngredient.image}
        className={ingredientDetailsStyle.picture}
      />
      <p className='text text_type_main-medium mt-4'>
        {currentIngredient.name}
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
            {currentIngredient.calories}
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
            {currentIngredient.proteins}
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
            {currentIngredient.fat}
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
            {currentIngredient.carbohydrates}
          </p>
        </li>
      </ul>
    </>
  );
}

export default IngredientDetails;
