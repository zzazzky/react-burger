import api from '../../utils/api';
import { refreshToken } from './token';

import {
  GET_USER_INFO_FEED,
  GET_USER_INFO_FEED_FAILED,
  GET_USER_INFO_FEED_SUCCESS,
  CHANGE_USER_INFO_FEED,
  CHANGE_USER_INFO_FEED_FAILED,
  CHANGE_USER_INFO_FEED_SUCCESS,
} from '../сonstants/actions';
import { AppDispatch } from '../../types/thunk-dispatch-types';

import { IUserResponse, IRegister } from '../../types/request-interfaces';

interface IUserInfoFeed {
  readonly type: typeof GET_USER_INFO_FEED;
}

interface IUserInfoFailed {
  readonly type: typeof GET_USER_INFO_FEED_FAILED;
}

interface IUserInfoSuccess {
  readonly type: typeof GET_USER_INFO_FEED_SUCCESS;
  readonly payload: {
    readonly name: string;
    readonly email: string;
  };
}

interface IChangeUserInfoFeed {
  readonly type: typeof CHANGE_USER_INFO_FEED;
}

interface IChangeUserInfoFeedFailed {
  readonly type: typeof CHANGE_USER_INFO_FEED_FAILED;
}

interface IChangeUserInfoFeedSuccess {
  readonly type: typeof CHANGE_USER_INFO_FEED_SUCCESS;
  readonly payload: {
    readonly name: string;
    readonly email: string;
  };
}

export type TUser =
  | IUserInfoFeed
  | IUserInfoFailed
  | IUserInfoSuccess
  | IChangeUserInfoFeed
  | IChangeUserInfoFeedFailed
  | IChangeUserInfoFeedSuccess;

export const getUserInfo = () => (dispatch: AppDispatch) => {
  dispatch({
    type: GET_USER_INFO_FEED,
  });
  api
    .getProfileInfo()
    .then((res: IUserResponse) => {
      dispatch({
        type: GET_USER_INFO_FEED_SUCCESS,
        payload: {
          name: res.user.name,
          email: res.user.email,
        },
      });
    })
    .catch((err: number) => {
      if (err === 403) {
        dispatch(refreshToken(getUserInfo, null, GET_USER_INFO_FEED_FAILED));
      } else {
        dispatch({
          type: GET_USER_INFO_FEED_FAILED,
        });
      }
    });
};

export const changeUserInfo =
  ({ email, name, password }: IRegister) =>
  (dispatch: AppDispatch) => {
    dispatch({
      type: CHANGE_USER_INFO_FEED,
    });
    api
      .changeProfileInfo({ email, name, password })
      .then((res: IUserResponse) => {
        dispatch({
          type: CHANGE_USER_INFO_FEED_SUCCESS,
          payload: {
            name: res.user.name,
            email: res.user.email,
          },
        });
      })
      .catch((err: number) => {
        if (err === 403) {
          dispatch(
            refreshToken(
              changeUserInfo,
              { email, name, password },
              CHANGE_USER_INFO_FEED_FAILED
            )
          );
        } else {
          dispatch({
            type: CHANGE_USER_INFO_FEED_FAILED,
          });
        }
      });
  };
