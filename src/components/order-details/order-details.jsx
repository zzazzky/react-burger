import PropTypes from 'prop-types';
import orderDetailsStyle from './order-details.module.css';
import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function OrderDetails() {
  return (
    <>
      <h3
        className={`${orderDetailsStyle.title} mt-4 mb-8 text text_type_digits-large`}>
        034536
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
  );
}

export default OrderDetails;
