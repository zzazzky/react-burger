import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import IngridientsCategoryStyles from './ingredients-category.module.css';

const IngredientsCategory = forwardRef((props, ref) => {
  return (
    <>
      <h3
        ref={ref}
        className='text text_type_main-medium mt-10'>
        {props.text}
      </h3>
      <ul
        className={`${IngridientsCategoryStyles.ingredientsContainer} pl-4 pr-2`}>
        {props.children}
      </ul>
    </>
  );
});

IngredientsCategory.propTypes = {
  text: PropTypes.string.isRequired,
};

export default IngredientsCategory;
