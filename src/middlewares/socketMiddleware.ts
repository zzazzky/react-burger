import type { Middleware, MiddlewareAPI } from 'redux';
import {
  FEED_WS_CONNECTION_START,
  FEED_WS_CONNECTION_SUCCESS,
  FEED_WS_CONNECTION_ERROR,
  FEED_WS_GET_MESSAGE,
  FEED_WS_CONNECTION_CLOSED,
  FEED_WS_CLOSE_CONNECTION,
} from '../services/сonstants/actions';
import type {
  TAppAction,
  RootState,
  AppDispatch,
} from '../types/thunk-dispatch-types';
import cookie from '../utils/cookie';
import api from '../utils/api';
import { IRefreshResponse } from '../types/request-interfaces';

export const socketMiddleware = (): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;
    let url: string = '';
    return (next) => (action: TAppAction) => {
      const { dispatch } = store;

      if (action.type === FEED_WS_CONNECTION_START) {
        console.log(action.type);
        if (!action.payload.shouldAuth) {
          socket = new WebSocket(action.payload.wsUrl);
          url = action.payload.wsUrl;
        } else {
          if (cookie.getCookie('accessToken') !== null) {
            socket = new WebSocket(
              `${action.payload.wsUrl}?token=${cookie.getCookie('accessToken')}`
            );
          } else {
            api
              .refreshToken()
              .then((res: IRefreshResponse) => {
                if (res.accessToken.startsWith('Bearer ')) {
                  cookie.setCookie('accessToken', res.accessToken.slice(7), {
                    expires: 1200,
                    path: '/',
                  });
                  localStorage.setItem('token', res.refreshToken);
                  dispatch({
                    type: FEED_WS_CONNECTION_START,
                    payload: { wsUrl: action.payload.wsUrl, shouldAuth: true },
                  });
                }
              })
              .catch(() => dispatch({ type: FEED_WS_CONNECTION_ERROR }));
          }
        }
      }

      if (action.type === FEED_WS_CLOSE_CONNECTION) {
        socket?.close(1000, 'CLOSE_GOING_AWAY');
        console.log(action.type);
      }
      if (socket) {
        socket.onopen = (event) => {
          console.log(FEED_WS_CONNECTION_SUCCESS);
          dispatch({ type: FEED_WS_CONNECTION_SUCCESS, payload: event });
        };

        socket.onerror = (event) => {
          console.log(FEED_WS_CONNECTION_ERROR);
          dispatch({
            type: FEED_WS_CONNECTION_ERROR,
          });
        };

        socket.onmessage = (event) => {
          console.log(FEED_WS_GET_MESSAGE);
          dispatch({
            type: FEED_WS_GET_MESSAGE,
            payload: JSON.parse(event.data),
          });
          if (
            !event.data.success &&
            event.data.message === 'Invalid or missing token'
          ) {
            api
              .refreshToken()
              .then((res: IRefreshResponse) => {
                if (res.accessToken.startsWith('Bearer ')) {
                  cookie.setCookie('accessToken', res.accessToken.slice(7), {
                    expires: 1200,
                    path: '/',
                  });
                  localStorage.setItem('token', res.refreshToken);
                  dispatch({
                    type: FEED_WS_CONNECTION_START,
                    payload: { wsUrl: url, shouldAuth: true },
                  });
                }
              })
              .catch(() => dispatch({ type: FEED_WS_CONNECTION_ERROR }));
          }
        };

        socket.onclose = () => {
          dispatch({ type: FEED_WS_CONNECTION_CLOSED });
        };
      }

      next(action);
    };
  }) as Middleware;
};
