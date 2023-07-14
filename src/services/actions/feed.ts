import { IFeedState, IOrderInfo } from '../../types/store-interface';
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
import { AppDispatch } from '../../types/thunk-dispatch-types';

interface IFeedWSConnectionStart {
  readonly type: typeof FEED_WS_CONNECTION_START;
  readonly payload: { wsUrl: string; shouldAuth: boolean };
}

interface IFeedWSConnectionSuccess {
  readonly type: typeof FEED_WS_CONNECTION_SUCCESS;
}

interface IFeedWSConnectionError {
  readonly type: typeof FEED_WS_CONNECTION_ERROR;
}

interface IFeedWSConnectionClosed {
  readonly type: typeof FEED_WS_CONNECTION_CLOSED;
}

interface IFeedWSCloseConnection {
  readonly type: typeof FEED_WS_CLOSE_CONNECTION;
}

interface IFeedWSGetMessage {
  readonly type: typeof FEED_WS_GET_MESSAGE;
  payload: IFeedState;
}

interface ISetCurrentOrder {
  readonly type: typeof SET_CURRENT_ORDER;
  readonly payload: { order: IOrderInfo | null };
}

interface IDeleteCurrentOrder {
  readonly type: typeof DELETE_CURRENT_ORDER;
}

export const startWS =
  ({ url, auth }: { url: string; auth: boolean }) =>
  (dispatch: AppDispatch) => {
    dispatch({
      type: FEED_WS_CONNECTION_START,
      payload: { wsUrl: url, shouldAuth: auth },
    });
  };

export type TFeedWS =
  | IFeedWSConnectionStart
  | IFeedWSConnectionSuccess
  | IFeedWSConnectionError
  | IFeedWSConnectionClosed
  | IFeedWSCloseConnection
  | IFeedWSGetMessage
  | ISetCurrentOrder
  | IDeleteCurrentOrder;
