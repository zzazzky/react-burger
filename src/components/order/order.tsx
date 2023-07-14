import React from 'react';
import orderStyles from './order.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { IOrderInfo } from '../../types/store-interface';
import { useDispatch, useSelector } from '../../types/hooks';
import { Link, useLocation } from 'react-router-dom';
import { SET_CURRENT_ORDER } from '../../services/сonstants/actions';

const Order: React.FC<{
  order: IOrderInfo;
}> = ({ order }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const orders = useSelector((store) => store.feed.orders);

  const handleOrderClick = () => {
    dispatch({
      type: SET_CURRENT_ORDER,
      payload: {
        order: orders?.find((item) => item._id === order._id) || null,
      },
    });
  };

  const buns = useSelector((store) => store.ingredients.buns);
  const mains = useSelector((store) => store.ingredients.mains);
  const sauces = useSelector((store) => store.ingredients.sauces);
  let price: number = 0;

  const date: Date | null =
    order.createdAt !== null ? new Date(order.createdAt) : null;

  const currentDate = new Date();
  const DayDiff =
    date !== null
      ? Math.ceil(
          Math.abs(currentDate.getTime() - date.getTime()) / (1000 * 3600 * 24)
        )
      : null;

  return order !== null ? (
    <Link
      to={
        location.pathname === '/feed'
          ? `/feed/${order._id}`
          : `/profile/orders/${order._id}`
      }
      state={{ background: location }}
      className={orderStyles.container}
      onClick={handleOrderClick}>
      <div className={orderStyles.orderInfoContainer}>
        <p className='text text_type_digits-default'>#{order.number}</p>
        <p className='text text_type_main-default text_color_inactive'>
          {date !== null
            ? ` ${
                DayDiff !== null
                  ? DayDiff > 1
                    ? DayDiff === 2 || DayDiff === 3 || DayDiff === 4
                      ? `${DayDiff} дня назад`
                      : `${DayDiff} дней назад`
                    : date.getDate() === currentDate.getDate()
                    ? 'Сегодня'
                    : 'Вчера'
                  : null
              }, ${date.getHours().toString()}:${date.getMinutes().toString()}`
            : null}
        </p>
      </div>
      <p className='text text_type_main-medium mt-6'>{order.name}</p>
      {location.pathname === '/profile/orders' ? (
        order.status === 'done' ? (
          <p
            className='text text_type_main-default mt-2'
            style={{ color: '#0CC' }}>
            Выполнен
          </p>
        ) : (
          <p className='text text_type_main-default mt-2'>
            {order.status === 'pending' ? 'Готовится' : 'Создан'}
          </p>
        )
      ) : null}
      <div className={orderStyles.orderInfoContainer}>
        {order.ingredients !== null ? (
          <ul className={orderStyles.ingredientsContainer}>
            {order.ingredients.map((item, index) => {
              const ingredient =
                buns?.find((storeIngredient) => storeIngredient._id === item) ||
                mains?.find(
                  (storeIngredient) => storeIngredient._id === item
                ) ||
                sauces?.find(
                  (storeIngredient) => storeIngredient._id === item
                ) ||
                null;
              if (ingredient !== null) {
                ingredient.type === 'bun'
                  ? (price = price + ingredient.price * 2)
                  : (price = price + ingredient.price);
              }
              return index <= 4 ? (
                ingredient !== null ? (
                  <li
                    key={index}
                    className={orderStyles.ingredientButton}
                    style={{ zIndex: 6 - index, left: -(16 * index) }}>
                    <img src={ingredient.image} />
                  </li>
                ) : null
              ) : index === 5 && ingredient !== null ? (
                <li
                  key={index}
                  className={orderStyles.ingredientButton}
                  style={{ zIndex: 6 - index, left: -(16 * index) }}>
                  <img src={ingredient.image} />
                  <div className={orderStyles.ingredientCover}>
                    <p className='text text_type_main-default'>{`+${
                      order.ingredients !== null
                        ? order.ingredients.length - 5
                        : null
                    }
                    `}</p>
                  </div>
                </li>
              ) : null;
            })}
          </ul>
        ) : null}
        <div className={orderStyles.currencyContainer}>
          <p className='text text_type_digits-default mr-2'>
            {price?.toLocaleString()}
          </p>
          <CurrencyIcon type='primary' />
        </div>
      </div>
    </Link>
  ) : null;
};

export default Order;
