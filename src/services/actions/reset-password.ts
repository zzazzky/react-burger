import api from '../../utils/api';
import {
  GET_RESET_CODE_FEED,
  GET_RESET_CODE_FAILED,
  GET_RESET_CODE_SUCCESS,
  GET_RESET_PASSWORD_FEED,
  GET_RESET_PASSWORD_FAILED,
  GET_RESET_PASSWORD_SUCCESS,
} from '../сonstants/actions';
import { IResetPassword } from '../../types/request-interfaces';
import { AppDispatch } from '../../types/thunk-dispatch-types';

interface IResetCodeFeed {
  readonly type: typeof GET_RESET_CODE_FEED;
}

interface IResetCodeFeedFailed {
  readonly type: typeof GET_RESET_CODE_FAILED;
}

interface IResetCodeFeedSuccess {
  readonly type: typeof GET_RESET_CODE_SUCCESS;
}

interface IResetPasswordFeed {
  readonly type: typeof GET_RESET_PASSWORD_FEED;
}

interface IResetPasswordFeedFailed {
  readonly type: typeof GET_RESET_PASSWORD_FAILED;
}

interface IResetPasswordFeedSuccess {
  readonly type: typeof GET_RESET_PASSWORD_SUCCESS;
}
export type TResetPasswordFeed =
  | IResetCodeFeed
  | IResetCodeFeedFailed
  | IResetCodeFeedSuccess
  | IResetPasswordFeed
  | IResetPasswordFeedFailed
  | IResetPasswordFeedSuccess;

export const sendResetCode = (email: string) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_RESET_CODE_FEED,
    });
    api
      .setResetCode(email)
      .then(() =>
        dispatch({
          type: GET_RESET_CODE_SUCCESS,
        })
      )
      .catch(() => {
        dispatch({
          type: GET_RESET_CODE_FAILED,
        });
      });
  };
};

export const resetPassword = ({ password, token }: IResetPassword) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_RESET_PASSWORD_FEED,
    });
    api
      .resetPassword({ password, token })
      .then(() =>
        dispatch({
          type: GET_RESET_PASSWORD_SUCCESS,
        })
      )
      .catch(() => {
        dispatch({
          type: GET_RESET_PASSWORD_FAILED,
        });
      });
  };
};
