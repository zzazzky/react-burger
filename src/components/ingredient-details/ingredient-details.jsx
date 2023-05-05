import PropTypes from 'prop-types';
import dataPropTypes from '../../utils/dataPropsType';
import ingredientDetailsStyle from './ingredient-details.module.css';

function IngredientDetails(props) {
  return (
    <>
      <img
        alt={props.ingredient.name}
        src={props.ingredient.image}
        className={ingredientDetailsStyle.picture}
      />
      <p className='text text_type_main-medium mt-4'>{props.ingredient.name}</p>
      <ul className={`${ingredientDetailsStyle.nutritional} mt-8 mb-5`}>
        <li
          key='calories'
          className={ingredientDetailsStyle.nutritionalItem}>
          <p className='text text_type_main-default text_color_inactive'>
            Калории, ккал
          </p>
          <p
            className={`${ingredientDetailsStyle.nutritionalNumber} text text_type_digits-default text_color_inactive mt-2`}>
            {props.ingredient.calories}
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
            {props.ingredient.proteins}
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
            {props.ingredient.fat}
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
            {props.ingredient.carbohydrates}
          </p>
        </li>
      </ul>
    </>
  );
}

IngredientDetails.propTypes = {
  ingredient: dataPropTypes.isRequired,
};

export default IngredientDetails;
