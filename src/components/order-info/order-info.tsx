import React from 'react';
import { useSelector, useDispatch } from '../../types/hooks';
import { useEffect } from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import orderInfoStyle from './order-info.module.css';
import { useParams, useLocation } from 'react-router-dom';
import {
  SET_CURRENT_ORDER,
  FEED_WS_CLOSE_CONNECTION,
  DELETE_CURRENT_ORDER,
} from '../../services/сonstants/actions';
import { startWS } from '../../services/actions/feed';

const OrderInfo: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const order: string | null = useParams().id || null;
  const currentOrder = useSelector((store) => store.feed.currentOrder);
  const ordersFeedSuccess = useSelector((store) => store.feed.wsConnected);

  const buns = useSelector((store) => store.ingredients.buns);
  const mains = useSelector((store) => store.ingredients.mains);
  const sauces = useSelector((store) => store.ingredients.sauces);
  const orders = useSelector((store) => store.feed.orders);
  const wsConnected = useSelector((store) => store.feed.wsConnected);
  let price: number = 0;

  const date: Date | null =
    currentOrder !== null && currentOrder?.createdAt !== null
      ? new Date(currentOrder.createdAt)
      : null;

  const currentDate = new Date();
  const DayDiff =
    date !== null
      ? Math.ceil(
          Math.abs(currentDate.getTime() - date.getTime()) / (1000 * 3600 * 24)
        )
      : null;

  useEffect(() => {
    if (!currentOrder) {
      order !== null &&
        dispatch({
          type: SET_CURRENT_ORDER,
          payload: {
            order: orders?.find((item) => item._id === order) || null,
          },
        });
    }
  }, [orders]);

  useEffect(() => {
    if (!ordersFeedSuccess) {
      location.pathname.startsWith('/feed/')
        ? dispatch(
            startWS({
              url: 'wss://norma.nomoreparties.space/orders/all',
              auth: false,
            })
          )
        : dispatch(
            startWS({
              url: 'wss://norma.nomoreparties.space/orders',
              auth: true,
            })
          );
      return () => {
        dispatch({
          type: DELETE_CURRENT_ORDER,
        });
      };
    }
  }, []);

  return (
    <section className={orderInfoStyle.container}>
      <p
        className={`mt-10 mb-10 main-title text text_type_main-default ${orderInfoStyle.orderID}`}>
        #{currentOrder?.number}
      </p>
      <h2 className='mb-3 main-title text text_type_main-medium'>
        {currentOrder?.name}
      </h2>
      {currentOrder?.status === 'done' ? (
        <p
          className='text text_type_main-default'
          style={{ color: '#0CC' }}>
          Выполнен
        </p>
      ) : (
        <p className='text text_type_main-default'>
          {currentOrder?.status === 'pending' ? 'Готовится' : 'Создан'}
        </p>
      )}
      <p className='mt-15 mb-2 main-title text text_type_main-medium'>
        Состав:
      </p>
      <ul className={orderInfoStyle.ingredients}>
        {currentOrder?.ingredients
          ?.map((item, itemIndex) => {
            const filteredIngredient = currentOrder?.ingredients?.filter(
              (ingredient) => ingredient === item
            );
            if (
              filteredIngredient !== undefined &&
              currentOrder?.ingredients?.indexOf(filteredIngredient[0]) ===
                itemIndex
            ) {
              return { id: item, quantity: filteredIngredient?.length };
            }
          })
          .map((item, index) => {
            const ingredient =
              buns?.find(
                (storeIngredient) => storeIngredient._id === item?.id
              ) ||
              mains?.find(
                (storeIngredient) => storeIngredient._id === item?.id
              ) ||
              sauces?.find(
                (storeIngredient) => storeIngredient._id === item?.id
              ) ||
              null;
            if (ingredient !== null && item?.quantity) {
              price = price + ingredient.price * item.quantity;
            }
            return item !== undefined ? (
              <li
                key={index}
                className={orderInfoStyle.ingredientContainer}>
                <div className={orderInfoStyle.ingredientInfo}>
                  <div className={orderInfoStyle.ingredientButton}>
                    <img src={ingredient?.image} />
                  </div>
                  <p className='text text_type_main-default ml-4'>
                    {ingredient?.name}
                  </p>
                </div>
                <div className={orderInfoStyle.currencyContainer}>
                  <p className='text text_type_digits-default mr-2'>{`${
                    item?.quantity
                  } x ${ingredient?.price.toLocaleString()}`}</p>
                  <CurrencyIcon type='primary' />
                </div>
              </li>
            ) : null;
          })}
      </ul>
      <div className={orderInfoStyle.timeContainer}>
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
        <div className={orderInfoStyle.currencyContainer}>
          <p className='text text_type_digits-default mr-2'>
            {price.toLocaleString()}
          </p>
          <CurrencyIcon type='primary' />
        </div>
      </div>
    </section>
  );
};

export default OrderInfo;
