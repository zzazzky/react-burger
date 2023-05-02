import PropTypes from 'prop-types';
import dataPropTypes from '../../utils/dataPropsType';
import { createPortal } from 'react-dom';
import orderDetailsStyle from './order-details.module.css';
import Modal from '../modal/modal';
import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const modalRoot = document.getElementById('react-modals');

function OrderDetails(props) {
  return createPortal(
    <Modal
      onClose={props.onClose}
      title=''>
      <h3
        className={`${orderDetailsStyle.title} ${
          document.documentElement.clientWidth > 1024
            ? 'mt-4 mb-8'
            : 'mt-2 mb-4'
        } text text_type_digits-large`}>
        034536
      </h3>
      <p className='text text_type_main-medium'>идентификатор заказа</p>
      <div
        className={`${orderDetailsStyle.icon} ${
          document.documentElement.clientWidth > 1024
            ? 'pt-15 pb-15'
            : 'pt-8 pb-8'
        } `}>
        <CheckMarkIcon type='primary' />
      </div>
      <p className='text text_type_main-default'>Ваш заказ начали готовить</p>
      <p
        className={`${
          document.documentElement.clientWidth > 1024 ? 'pb-20' : 'pb-10'
        } pt-2 text text_type_main-default text_color_inactive`}>
        {' '}
        Дождитесь готовности на орбитальной станции
      </p>
    </Modal>,
    modalRoot
  );
}

OrderDetails.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default OrderDetails;
