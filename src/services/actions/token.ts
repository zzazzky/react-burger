import api from '../../utils/api';
import cookie from '../../utils/cookie';
import { IRefreshResponse } from '../../types/request-interfaces';
import {
  GET_TOKEN_FEED,
  GET_TOKEN_SUCCESS,
  GET_TOKEN_FAILED,
  FEED_WS_CONNECTION_ERROR,
} from '../сonstants/actions';
import { AppDispatch } from '../../types/thunk-dispatch-types';
import { GET_ORDER_FEED_FAILED } from '../сonstants/actions';
import {
  GET_USER_INFO_FEED_FAILED,
  CHANGE_USER_INFO_FEED_FAILED,
} from '../сonstants/actions';

interface IGetTokenFeed {
  readonly type: typeof GET_TOKEN_FEED;
}

interface IGetTokenFeedFailed {
  readonly type: typeof GET_TOKEN_FAILED;
}

interface IGetTokenFeedSuccess {
  readonly type: typeof GET_TOKEN_SUCCESS;
}

export type TToken = IGetTokenFeed | IGetTokenFeedFailed | IGetTokenFeedSuccess;

export const refreshToken =
  (
    previousAction: any,
    props: {} | null,
    failType:
      | typeof GET_ORDER_FEED_FAILED
      | typeof GET_USER_INFO_FEED_FAILED
      | typeof CHANGE_USER_INFO_FEED_FAILED
      | typeof FEED_WS_CONNECTION_ERROR
  ) =>
  (dispatch: AppDispatch) => {
    dispatch({
      type: GET_TOKEN_FEED,
    });
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
            type: GET_TOKEN_SUCCESS,
          });
        }
      })
      .then(() => dispatch(previousAction(props)))
      .catch(() => {
        dispatch({
          type: GET_TOKEN_FAILED,
        });

        dispatch({
          type: failType,
        });
      });
  };
