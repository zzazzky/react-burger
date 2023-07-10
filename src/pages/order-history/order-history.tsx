import React from 'react';
import orderHistoryStyles from './order-history.module.css';
import ProfileMenu from '../../components/profile-menu/profile-menu';

const OrderHistory: React.FC = () => {
  return (
    <main className={orderHistoryStyles.container}>
      <section>
        <ProfileMenu />
      </section>
      <section></section>
    </main>
  );
};

export default OrderHistory;
