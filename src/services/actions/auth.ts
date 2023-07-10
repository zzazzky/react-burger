import api from '../../utils/api';
import cookie from '../../utils/cookie';
import {
  GET_AUTH_FEED,
  GET_AUTH_FEED_FAILED,
  GET_AUTH_FEED_SUCCESS,
} from '../сonstants/actions';
import { TResponse, ILogin, IRegister } from '../../types/request-interfaces';
import { AppDispatch } from '../../types/thunk-dispatch-types';

interface IAuthFeed {
  readonly type: typeof GET_AUTH_FEED;
}

interface IAuthFeedFailed {
  readonly type: typeof GET_AUTH_FEED_FAILED;
}

interface IAuthFeedSuccess {
  readonly type: typeof GET_AUTH_FEED_SUCCESS;
  readonly payload: {
    readonly name: string;
    readonly email: string;
  };
}

export type TAuth = IAuthFeed | IAuthFeedFailed | IAuthFeedSuccess;

export const register =
  ({ name, email, password }: IRegister) =>
  (dispatch: AppDispatch) => {
    dispatch({
      type: GET_AUTH_FEED,
    });
    api
      .signup({ name, email, password })
      .then((res: TResponse) => {
        if (res.accessToken.startsWith('Bearer ')) {
          cookie.setCookie('accessToken', res.accessToken.slice(7), {
            expires: 1200,
            path: '/',
          });
          localStorage.setItem('token', res.refreshToken);
          dispatch({
            type: GET_AUTH_FEED_SUCCESS,
            payload: {
              name: res.user.name,
              email: res.user.email,
            },
          });
        }
      })
      .catch(() => {
        dispatch({
          type: GET_AUTH_FEED_FAILED,
        });
      });
  };

export const login =
  ({ email, password }: ILogin) =>
  (dispatch: AppDispatch) => {
    dispatch({
      type: GET_AUTH_FEED,
    });
    api
      .login({ email, password })
      .then((res: TResponse) => {
        if (res.accessToken.startsWith('Bearer ')) {
          cookie.setCookie('accessToken', res.accessToken.slice(7), {
            expires: 1200,
            path: '/',
          });
          localStorage.setItem('token', res.refreshToken);
          dispatch({
            type: GET_AUTH_FEED_SUCCESS,
            payload: {
              name: res.user.name,
              email: res.user.email,
            },
          });
        }
      })
      .catch(() => {
        dispatch({
          type: GET_AUTH_FEED_FAILED,
        });
      });
  };
