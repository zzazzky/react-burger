import React from 'react';
import { useCallback } from 'react';
import orderLineStyles from './order-line.module.css';
import Order from '../order/order';
import { useDispatch, useSelector } from '../../types/hooks';
import Modal from '../modal/modal';
import OrderInfo from '../order-info/order-info';
import { useNavigate, useLocation } from 'react-router-dom';
import { DELETE_CURRENT_ORDER } from '../../services/сonstants/actions';

const OrderLine: React.FC = () => {
  const orders = useSelector((store) => store.feed.orders);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const currentOrder = useSelector((store) => store.feed.currentOrder);
  const closeOrderDetails = useCallback(() => {
    dispatch({
      type: DELETE_CURRENT_ORDER,
    });
    navigate(location.pathname);
  }, []);

  return (
    <ul className={orderLineStyles.container}>
      {orders !== null
        ? orders?.map((item) => {
            return (
              <Order
                key={item._id}
                order={item}
              />
            );
          })
        : null}
      {currentOrder && (
        <Modal onClose={closeOrderDetails}>
          <OrderInfo />
        </Modal>
      )}
    </ul>
  );
};

export default OrderLine;
