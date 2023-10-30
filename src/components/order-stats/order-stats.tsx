import React from 'react';
import OrderStatsStyles from './order-stats.module.css';
import { useSelector } from '../../types/hooks';

const OrderStats: React.FC = () => {
  const total = useSelector((store) => store.feed.total);
  const totalToday = useSelector((store) => store.feed.totalToday);
  const orders = useSelector((store) => store.feed.orders);

  return (
    <section className={OrderStatsStyles.container}>
      <div className={OrderStatsStyles.processContainer}>
        <div>
          <p className='text text_type_main-medium mb-4'>Готовы:</p>
          {orders !== null ? (
            <ul
              className={OrderStatsStyles.list}
              style={{
                columnGap: '8px',
                gridTemplateColumns: `repeat(${Math.ceil(
                  orders?.filter((order) => order.status === 'done').length / 10
                )}, 1fr)`,
              }}>
              {orders?.map((order) => {
                return order.status === 'done' ? (
                  <li
                    className={`text text_type_digits-default mt-2 ${OrderStatsStyles.readyNumber}`}
                    key={order._id}>
                    {order.number}
                  </li>
                ) : null;
              })}
            </ul>
          ) : null}
        </div>
        <div>
          <p className='text text_type_main-medium mb-4'>В работе</p>
          {orders !== null ? (
            <ul
              style={{
                gridTemplateColumns: `repeat(${Math.ceil(
                  orders?.filter((order) => order.status === 'pending').length /
                    10
                )}, 1fr)`,
              }}>
              {orders?.map((order) => {
                return order.status === 'pending' ? (
                  <li
                    className='text text_type_digits-default mt-2'
                    key={order._id}>
                    {order.number}
                  </li>
                ) : null;
              })}
            </ul>
          ) : null}
        </div>
      </div>
      <div>
        <p className='text text_type_main-medium'>Выполнено за все время</p>
        <p
          className={`text text_type_digits-large ${OrderStatsStyles.shadowNumber}`}>
          {total?.toLocaleString()}
        </p>
      </div>
      <div>
        <p className='text text_type_main-medium'>Выполнено за сегодня</p>
        <p
          className={`text text_type_digits-large ${OrderStatsStyles.shadowNumber}`}>
          {totalToday?.toLocaleString()}
        </p>
      </div>
    </section>
  );
};

export default OrderStats;
