import { useState, useEffect } from 'react';
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

function BurgerConstructor(props) {
  const [orderDetailsIsOpen, setOrderDetailsIsOpen] = useState(false);
  const [sum, setSum] = useState(0);

  function handleOrderButtonClick() {
    setOrderDetailsIsOpen(true);
  }

  function closeOrderDetails() {
    setOrderDetailsIsOpen(false);
  }

  useEffect(() => {
    setSum(
      props.data.reduce((previousValue, item) => {
        return previousValue + item.price;
      }, 0)
    );
  }, [JSON.stringify(props.data)]);

  return (
    <section className={`${burgerConstructorStyles.section} pt-15 pl-4`}>
      <div className={`${burgerConstructorStyles.container} mb-10`}>
        <div className={`${burgerConstructorStyles.lockContainer} pl-8 pr-4`}>
          {props.data
            .filter((item) => {
              //выбор булки захардкоржен для сдачи верстки, т.к. на данный момент не реализовано добавление ингридиентов в конструктор и иначе добавляются обе булки
              return (
                item.type === 'bun' && item.name === 'Краторная булка N-200i'
              );
            })
            .map((filteredItem) => {
              return (
                <ConstructorElement
                  type='top'
                  isLocked={true}
                  key={filteredItem._id}
                  text={filteredItem.name}
                  price={filteredItem.price}
                  thumbnail={filteredItem.image}
                />
              );
            })}
        </div>
        <ul className={burgerConstructorStyles.dragContainer}>
          {props.data
            .filter((item) => {
              return item.type !== 'bun';
            })
            .map((filteredItem) => {
              return (
                <div
                  key={filteredItem._id}
                  className={burgerConstructorStyles.itemContainer}>
                  <DragIcon type='primary' />
                  <ConstructorElement
                    text={filteredItem.name}
                    price={filteredItem.price}
                    thumbnail={filteredItem.image}
                  />
                </div>
              );
            })}
        </ul>
        <div className={`${burgerConstructorStyles.lockContainer} pl-8 pr-4`}>
          {props.data
            .filter((item) => {
              //выбор булки захардкоржен для сдачи верстки, т.к. на данный момент не реализовано добавление ингридиентов в конструктор и иначе добавляются обе булки
              return (
                item.type === 'bun' && item.name === 'Краторная булка N-200i'
              );
            })
            .map((filteredItem) => {
              return (
                <ConstructorElement
                  type='bottom'
                  isLocked={true}
                  key={filteredItem._id}
                  text={filteredItem.name}
                  price={filteredItem.price}
                  thumbnail={filteredItem.image}
                />
              );
            })}
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
      {orderDetailsIsOpen && <OrderDetails onClose={closeOrderDetails} />}
    </section>
  );
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(dataPropTypes).isRequired,
};

export default BurgerConstructor;
