import api from '../../utils/api';
import { AppDispatch } from '../../types/thunk-dispatch-types';
import {
  GET_LOGOUT_FEED,
  GET_LOGOUT_FEED_FAILED,
  GET_LOGOUT_FEED_SUCCESS,
} from '../сonstants/actions';

interface ILogoutFeed {
  readonly type: typeof GET_LOGOUT_FEED;
}

interface ILogoutFeedFailed {
  readonly type: typeof GET_LOGOUT_FEED_FAILED;
}

interface ILogoutFeedSuccess {
  readonly type: typeof GET_LOGOUT_FEED_SUCCESS;
}

export type TLogout = ILogoutFeed | ILogoutFeedFailed | ILogoutFeedSuccess;

export const logout = () => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_LOGOUT_FEED,
    });
    api
      .logout()
      .then(() => {
        dispatch({
          type: GET_LOGOUT_FEED_SUCCESS,
        });
      })
      .catch(() => {
        dispatch({
          type: GET_LOGOUT_FEED_FAILED,
        });
      });
  };
};
