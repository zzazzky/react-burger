import { IFeedState } from '../../types/store-interface';
import { TFeedWS } from '../actions/feed';
import {
  FEED_WS_CONNECTION_START,
  FEED_WS_CONNECTION_SUCCESS,
  FEED_WS_CONNECTION_ERROR,
  FEED_WS_GET_MESSAGE,
  FEED_WS_CONNECTION_CLOSED,
  FEED_WS_CLOSE_CONNECTION,
  SET_CURRENT_ORDER,
  DELETE_CURRENT_ORDER,
} from '../сonstants/actions';

export const feedInitialState: IFeedState = {
  orders: null,
  wsConnected: false,
  wsError: true,
  total: null,
  totalToday: null,
  currentOrder: null,
};

export const feed = (state = feedInitialState, action: TFeedWS): IFeedState => {
  switch (action.type) {
    case FEED_WS_CONNECTION_START:
      return {
        ...state,
      };
    case FEED_WS_CLOSE_CONNECTION:
      return {
        ...state,
      };
    case FEED_WS_CONNECTION_SUCCESS:
      return {
        ...state,
        wsConnected: true,
        wsError: false,
      };
    case FEED_WS_CONNECTION_ERROR:
      return {
        ...state,
        wsConnected: false,
        wsError: true,
      };
    case FEED_WS_GET_MESSAGE:
      return {
        ...state,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
      };
    case FEED_WS_CONNECTION_CLOSED:
      return {
        ...state,
        orders: null,
        wsConnected: false,
        wsError: true,
        total: null,
        totalToday: null,
      };
    case SET_CURRENT_ORDER:
      return {
        ...state,
        currentOrder: action.payload.order,
      };
    case DELETE_CURRENT_ORDER:
      return {
        ...state,
        currentOrder: null,
      };
    default:
      return state;
  }
};
