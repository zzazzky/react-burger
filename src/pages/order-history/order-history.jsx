import orderHistoryStyles from './order-history.module.css';

import ProfileMenu from '../../components/profile-menu/profile-menu';

function OrderHistory() {
  return (
    <main className={orderHistoryStyles.container}>
      <section>
        <ProfileMenu />
      </section>
      <section></section>
    </main>
  );
}

export default OrderHistory;
