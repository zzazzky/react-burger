import { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import dataPropTypes from '../../utils/dataPropsType';
import burgerConstructorStyles from './burger-constructor.module.css';
import OrderDetails from '../order-details/order-details';
import {
  CurrencyIcon,
  DragIcon,
  Button,
  ConstructorElement,
} from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';

function BurgerConstructor(props) {
  const [orderDetailsIsOpen, setOrderDetailsIsOpen] = useState(false);

  const { bun, ingredients } = useMemo(() => {
    return {
      bun: props.data.find((item) => item.type === 'bun'),
      ingredients: props.data.filter((item) => item.type !== 'bun'),
    };
  }, [JSON.stringify(props.data)]);

  const handleOrderButtonClick = useCallback(() => {
    setOrderDetailsIsOpen(true);
  }, []);

  const closeOrderDetails = useCallback(() => {
    setOrderDetailsIsOpen(false);
  }, []);

  const sum = useMemo(() => {
    return props.data.reduce((previousValue, item) => {
      return previousValue + item.price;
    }, 0);
  }, [JSON.stringify(props.data)]);

  return (
    <section className={`${burgerConstructorStyles.section} pt-15 pl-4`}>
      <div className={`${burgerConstructorStyles.container} mb-10`}>
        <div className={`${burgerConstructorStyles.lockContainer} pl-8 pr-4`}>
          <ConstructorElement
            type='top'
            isLocked={true}
            key={bun._id}
            text={`${bun.name} (верх)`}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
        <ul className={burgerConstructorStyles.dragContainer}>
          {ingredients.map((item) => {
            return (
              <div
                key={item._id}
                className={burgerConstructorStyles.itemContainer}>
                <DragIcon type='primary' />
                <ConstructorElement
                  text={item.name}
                  price={item.price}
                  thumbnail={item.image}
                />
              </div>
            );
          })}
        </ul>
        <div className={`${burgerConstructorStyles.lockContainer} pl-8 pr-4`}>
          <ConstructorElement
            type='bottom'
            isLocked={true}
            key={bun._id}
            text={`${bun.name} (низ)`}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
      </div>
      <div className={burgerConstructorStyles.buttonContainer}>
        <div className={`${burgerConstructorStyles.sum} mr-10`}>
          <p className='text text_type_digits-medium mr-2'>{sum}</p>
          <CurrencyIcon type='primary' />
        </div>
        <Button
          htmlType='button'
          type='primary'
          size='large'
          onClick={handleOrderButtonClick}>
          Оформить заказ
        </Button>
      </div>
      {orderDetailsIsOpen && (
        <Modal onClose={closeOrderDetails}>
          <OrderDetails />
        </Modal>
      )}
    </section>
  );
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(dataPropTypes.isRequired).isRequired,
};

export default BurgerConstructor;
