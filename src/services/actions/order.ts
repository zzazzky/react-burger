import api from '../../utils/api';
import { refreshToken } from './token';
import {
  GET_ORDER_FEED,
  GET_ORDER_FEED_FAILED,
  GET_ORDER_FEED_SUCCESS,
} from '../сonstants/actions';
import { IIngredient, IOrderInfo } from '../../types/store-interface';
import { IOrder } from '../../types/request-interfaces';
import { AppDispatch } from '../../types/thunk-dispatch-types';
interface IOrderFeed {
  readonly type: typeof GET_ORDER_FEED;
}

interface IOrderFeedFailed {
  readonly type: typeof GET_ORDER_FEED_FAILED;
}

interface IOrderFeedSuccess {
  readonly type: typeof GET_ORDER_FEED_SUCCESS;
  readonly payload: {
    number: number;
    name: string;
  };
}

export type TOrder = IOrderFeed | IOrderFeedFailed | IOrderFeedSuccess;

export const sendOrder = (ingredients: Array<IIngredient>) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_ORDER_FEED,
    });
    api
      .postOrder(ingredients.map((ingredient: IIngredient) => ingredient._id))
      .then((res: IOrder) =>
        dispatch({
          type: GET_ORDER_FEED_SUCCESS,
          payload: {
            name: res.name,
            number: res.order.number,
          },
        })
      )
      .catch((err: number) => {
        if (err === 403) {
          dispatch(refreshToken(sendOrder, ingredients, GET_ORDER_FEED_FAILED));
        } else {
          dispatch({
            type: GET_ORDER_FEED_FAILED,
          });
        }
      });
  };
};
