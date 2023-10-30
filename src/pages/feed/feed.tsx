import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from '../../types/hooks';
import FeedStyles from './feed.module.css';
import OrderLine from '../../components/order-line/order-line';
import OrderStats from '../../components/order-stats/order-stats';
import { FEED_WS_CLOSE_CONNECTION } from '../../services/сonstants/actions';
import { startWS } from '../../services/actions/feed';

const Feed: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      startWS({
        url: 'wss://norma.nomoreparties.space/orders/all',
        auth: false,
      })
    );
    return () => {
      dispatch({
        type: FEED_WS_CLOSE_CONNECTION,
      });
    };
  }, []);

  return (
    <div className={FeedStyles.container}>
      <section>
        <h1 className='mb-5 main-title text text_type_main-large'>
          Лента заказов
        </h1>
        <OrderLine />
      </section>
      <OrderStats />
    </div>
  );
};

export default Feed;
