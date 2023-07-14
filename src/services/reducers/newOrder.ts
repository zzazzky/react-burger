import { TOrder } from '../actions/order';
import {
  GET_ORDER_FEED,
  GET_ORDER_FEED_FAILED,
  GET_ORDER_FEED_SUCCESS,
} from '../сonstants/actions';
import { INewOrderState } from '../../types/store-interface';

const newOrderInitialState: INewOrderState = {
  info: null,
  orderRequest: false,
  orderFeedFailed: false,
  orderFeedSuccess: false,
};

const newOrder = (
  state = newOrderInitialState,
  action: TOrder
): INewOrderState => {
  switch (action.type) {
    case GET_ORDER_FEED:
      return {
        ...state,
        orderRequest: true,
      };

    case GET_ORDER_FEED_FAILED:
      return {
        ...state,
        orderRequest: false,
        orderFeedFailed: true,
        orderFeedSuccess: false,
      };

    case GET_ORDER_FEED_SUCCESS:
      return {
        ...state,
        orderRequest: false,
        orderFeedFailed: false,
        orderFeedSuccess: true,
        info: {
          number: action.payload.number,
          name: action.payload.name,
        },
      };

    default:
      return state;
  }
};

export default newOrder;
