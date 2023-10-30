import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from '../../types/hooks';
import { FEED_WS_CLOSE_CONNECTION } from '../../services/сonstants/actions';
import orderHistoryStyles from './order-history.module.css';
import ProfileMenu from '../../components/profile-menu/profile-menu';
import OrderLine from '../../components/order-line/order-line';
import cookie from '../../utils/cookie';
import { startWS } from '../../services/actions/feed';
const OrderHistory: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      startWS({
        url: 'wss://norma.nomoreparties.space/orders',
        auth: true,
      })
    );
    return () => {
      dispatch({
        type: FEED_WS_CLOSE_CONNECTION,
      });
    };
  }, []);

  return (
    <main className={orderHistoryStyles.container}>
      <section>
        <ProfileMenu />
      </section>
      <section>
        <OrderLine />
      </section>
    </main>
  );
};

export default OrderHistory;
