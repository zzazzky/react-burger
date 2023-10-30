import {
  GET_RESET_CODE_FEED,
  GET_RESET_CODE_FAILED,
  GET_RESET_CODE_SUCCESS,
  GET_RESET_PASSWORD_FEED,
  GET_RESET_PASSWORD_FAILED,
  GET_RESET_PASSWORD_SUCCESS,
} from '../сonstants/actions';
import { TResetPasswordFeed } from '../actions/reset-password';
import { IResetPasswordState } from '../../types/store-interface';

export const resetPasswordInitialState: IResetPasswordState = {
  sendResetCodeRequest: {
    isResetCodeRequest: false,
    isResetCodeSuccess: false,
    isResetCodeFailed: false,
  },
  resetPasswordRequest: {
    isResetPasswordRequest: false,
    isResetPasswordSuccess: false,
    isResetPasswordFailed: false,
  },
};

export const resetPassword = (
  state = resetPasswordInitialState,
  action: TResetPasswordFeed
): IResetPasswordState => {
  switch (action.type) {
    case GET_RESET_CODE_FEED:
      return {
        ...state,
        sendResetCodeRequest: {
          ...state.sendResetCodeRequest,
          isResetCodeRequest: true,
        },
      };

    case GET_RESET_CODE_FAILED:
      return {
        ...state,
        sendResetCodeRequest: {
          ...state.sendResetCodeRequest,
          isResetCodeRequest: false,
          isResetCodeFailed: true,
          isResetCodeSuccess: false,
        },
      };

    case GET_RESET_CODE_SUCCESS:
      return {
        ...state,
        sendResetCodeRequest: {
          ...state.sendResetCodeRequest,
          isResetCodeRequest: false,
          isResetCodeFailed: false,
          isResetCodeSuccess: true,
        },
      };

    case GET_RESET_PASSWORD_FEED:
      return {
        ...state,
        resetPasswordRequest: {
          ...state.resetPasswordRequest,
          isResetPasswordRequest: true,
        },
      };

    case GET_RESET_PASSWORD_FAILED:
      return {
        ...state,
        resetPasswordRequest: {
          ...state.resetPasswordRequest,
          isResetPasswordRequest: false,
          isResetPasswordFailed: true,
          isResetPasswordSuccess: false,
        },
      };

    case GET_RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        sendResetCodeRequest: {
          ...state.sendResetCodeRequest,
          isResetCodeSuccess: false,
        },
        resetPasswordRequest: {
          ...state.resetPasswordRequest,
          isResetPasswordRequest: false,
          isResetPasswordFailed: false,
          isResetPasswordSuccess: true,
        },
      };

    default:
      return state;
  }
};
