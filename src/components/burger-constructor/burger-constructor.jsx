import { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const [orderDetailsIsOpen, setOrderDetailsIsOpen] = useState(false);
  const isLoggedIn = useSelector((store) => store.profile.user.isLoggedIn);
  const currentBun = useSelector((store) => store.constructor.bun);

  const currentIngredients = useSelector(
    (store) => store.constructor.ingredients
  );

  const sum = useSelector((store) => store.constructor.sum);
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
    if (isLoggedIn) {
      setOrderDetailsIsOpen(true);
      dispatch(sendOrder([currentBun, ...currentIngredients]));
    } else {
      navigate('/login');
    }
  }, [currentBun, currentIngredients, isLoggedIn]);

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
            key={currentBun?._id}
            text={`${currentBun?.name} (верх)`}
            price={currentBun?.price}
            thumbnail={currentBun?.image}
          />
        </div>
        <ul className={burgerConstructorStyles.dragContainer}>
          {currentIngredients?.map((item, index) => {
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
            key={currentBun?._id}
            text={`${currentBun?.name} (низ)`}
            price={currentBun?.price}
            thumbnail={currentBun?.image}
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
