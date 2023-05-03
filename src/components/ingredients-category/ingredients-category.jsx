import PropTypes, { array } from 'prop-types';
import IngridientsCategoryStyles from './ingredients-category.module.css';

function IngredientsCategory(props) {
  return (
    <>
      <h3 className='text text_type_main-medium mt-10'>{props.text}</h3>
      <ul
        className={`${IngridientsCategoryStyles.ingredientsContainer} pl-4 pr-2`}>
        {props.children}
      </ul>
    </>
  );
}

IngredientsCategory.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
};

export default IngredientsCategory;
