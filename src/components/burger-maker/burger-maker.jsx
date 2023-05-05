import PropTypes from 'prop-types';
import dataPropTypes from '../../utils/dataPropsType';
import burgerMakerStyles from './burger-maker.module.css';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

function BurgerMaker(props) {
  if (props.isLoaded) {
    return (
      <div className={burgerMakerStyles.container}>
        <>
          <BurgerIngredients data={props.data} />
          <BurgerConstructor data={props.data} />
        </>
      </div>
    );
  } else {
    return (
      <section className={burgerMakerStyles.textContainer}>
        <p className='text text_type_main-large'>{props.replacementText}</p>
      </section>
    );
  }
}

BurgerMaker.propTypes = {
  data: PropTypes.arrayOf(dataPropTypes.isRequired).isRequired,
  isLoaded: PropTypes.bool.isRequired,
  replacementText: PropTypes.string.isRequired,
};

export default BurgerMaker;
