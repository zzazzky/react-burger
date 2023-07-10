import React from 'react';
import { useSelector } from '../../types/hooks';
import orderDetailsStyle from './order-details.module.css';
import {
  CheckMarkIcon,
  CloseIcon,
  BurgerIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

const OrderDetails: React.FC = () => {
  const orderNumber = useSelector((store) => store.order.currentOrder?.number);

  const orderRequest = useSelector((store) => store.order.orderRequest);

  const orderFeedSuccess = useSelector((store) => store.order.orderFeedSuccess);

  const orderFeedFailed = useSelector((store) => store.order.orderFeedFailed);

  const replacementText: string = !orderFeedFailed
    ? 'Отправляем заказ'
    : 'Упс, что-то пошло не так! Попробуйте еще раз';

  const replacementPicture: React.ReactNode = !orderFeedFailed ? (
    <BurgerIcon type='primary' />
  ) : (
    <CloseIcon type='primary' />
  );

  return !orderRequest && orderFeedSuccess ? (
    <>
      <h3
        className={`${orderDetailsStyle.title} mt-4 mb-8 text text_type_digits-large`}>
        {orderNumber}
      </h3>
      <p className='text text_type_main-medium'>идентификатор заказа</p>
      <div className={`${orderDetailsStyle.icon} pt-15 pb-15`}>
        <CheckMarkIcon type='primary' />
      </div>
      <p className='text text_type_main-default'>Ваш заказ начали готовить</p>
      <p className='pb-20 pt-2 text text_type_main-default text_color_inactive'>
        Дождитесь готовности на орбитальной станции
      </p>
    </>
  ) : (
    <>
      <p className='text text_type_main-medium'>{replacementText}</p>
      <div className={`${orderDetailsStyle.icon} pt-15 pb-15`}>
        {replacementPicture}
      </div>
    </>
  );
};

export default OrderDetails;
