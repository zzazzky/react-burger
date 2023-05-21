import { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';
import burgerConstructorStyles from './burger-constructor.module.css';
import OrderDetails from '../order-details/order-details';
import DraggableContainer from '../constructor-draggable-ingredient/constructor-draggable-ingredient';
import {
  CurrencyIcon,
  Button,
  ConstructorElement,
} from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import { sendOrder } from '../../services/actions/order';
import { ADD_CONSTRUCTOR_INGREDIENT } from '../../services/actions/constructor';
function BurgerConstructor() {
  const dispatch = useDispatch();

  const [orderDetailsIsOpen, setOrderDetailsIsOpen] = useState(false);
  const { bun, ingredients, sum } = useSelector((store) => ({
    bun: store.constructor.bun,
    ingredients: store.constructor.ingredients,
    sum: store.constructor.sum,
  }));

  const [, ingredientDropTarget] = useDrop({
    accept: 'ingredient',
    drop(ingredient) {
      handleIngredientDrop(ingredient);
    },
  });

  const handleIngredientDrop = (ingredient) => {
    dispatch({
      type: ADD_CONSTRUCTOR_INGREDIENT,
      payload: {
        ingredient: ingredient,
      },
    });
  };

  const handleOrderButtonClick = useCallback(() => {
    setOrderDetailsIsOpen(true);
    dispatch(sendOrder([bun, ...ingredients]));
  }, [bun, ingredients]);

  const closeOrderDetails = useCallback(() => {
    setOrderDetailsIsOpen(false);
  }, []);

  return (
    <section className={`${burgerConstructorStyles.section} pt-15 pl-4`}>
      <div
        className={`${burgerConstructorStyles.container} mb-10`}
        ref={ingredientDropTarget}>
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
          {ingredients.map((item, index) => {
            return (
              <DraggableContainer
                key={item._id + index}
                ingredient={item}
                index={index}
              />
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

export default BurgerConstructor;
