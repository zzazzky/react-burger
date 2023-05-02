import PropTypes from 'prop-types';
import dataPropTypes from '../../utils/dataPropsType';
import burgerMakerStyles from './burger-maker.module.css';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

function BurgerMaker(props) {
  return (
    <>
      <div className={burgerMakerStyles.container}>
        <BurgerIngredients data={props.data} />
        <BurgerConstructor data={props.data} />
      </div>
    </>
  );
}

BurgerMaker.propTypes = {
  data: PropTypes.arrayOf(dataPropTypes).isRequired,
};

export default BurgerMaker;
