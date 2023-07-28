import {
  resetPassword,
  resetPasswordInitialState,
} from '../../../services/reducers/reset-password';
import {
  GET_RESET_CODE_FEED,
  GET_RESET_CODE_FAILED,
  GET_RESET_CODE_SUCCESS,
  GET_RESET_PASSWORD_FEED,
  GET_RESET_PASSWORD_FAILED,
  GET_RESET_PASSWORD_SUCCESS,
} from '../../../services/сonstants/actions';

const resetCodeRequestState = {
  ...resetPasswordInitialState.sendResetCodeRequest,
  isResetCodeRequest: true,
};

const resetCodeSendState = {
  ...resetPasswordInitialState.sendResetCodeRequest,
  isResetCodeSuccess: true,
};

const resetPasswordRequestState = {
  sendResetCodeRequest: resetCodeSendState,
  resetPasswordRequest: {
    ...resetPasswordInitialState.resetPasswordRequest,
    isResetPasswordRequest: true,
  },
};

describe('resetPassword reducer', () => {
  it('should return the initial state', () => {
    expect(resetPassword(undefined, {})).toEqual(resetPasswordInitialState);
  });

  it('should handle GET_RESET_CODE_FEED', () => {
    expect(
      resetPassword(resetPasswordInitialState, {
        type: GET_RESET_CODE_FEED,
      })
    ).toEqual({
      sendResetCodeRequest: resetCodeRequestState,
      resetPasswordRequest: resetPasswordInitialState.resetPasswordRequest,
    });
  });

  it('should handle GET_RESET_CODE_FAILED', () => {
    expect(
      resetPassword(
        {
          sendResetCodeRequest: resetCodeRequestState,
          resetPasswordRequest: resetPasswordInitialState.resetPasswordRequest,
        },
        {
          type: GET_RESET_CODE_FAILED,
        }
      )
    ).toEqual({
      sendResetCodeRequest: {
        ...resetPasswordInitialState.sendResetCodeRequest,
        isResetCodeFailed: true,
      },
      resetPasswordRequest: resetPasswordInitialState.resetPasswordRequest,
    });
  });

  it('should handle GET_RESET_CODE_SUCCESS', () => {
    expect(
      resetPassword(
        {
          sendResetCodeRequest: resetCodeRequestState,
          resetPasswordRequest: resetPasswordInitialState.resetPasswordRequest,
        },
        {
          type: GET_RESET_CODE_SUCCESS,
        }
      )
    ).toEqual({
      sendResetCodeRequest: resetCodeSendState,
      resetPasswordRequest: resetPasswordInitialState.resetPasswordRequest,
    });
  });

  it('should handle GET_RESET_PASSWORD_FEED', () => {
    expect(
      resetPassword(
        {
          sendResetCodeRequest: resetCodeSendState,
          resetPasswordRequest: resetPasswordInitialState.resetPasswordRequest,
        },
        {
          type: GET_RESET_PASSWORD_FEED,
        }
      )
    ).toEqual(resetPasswordRequestState);
  });

  it('should handle GET_RESET_PASSWORD_FAILED', () => {
    expect(
      resetPassword(resetPasswordRequestState, {
        type: GET_RESET_PASSWORD_FAILED,
      })
    ).toEqual({
      sendResetCodeRequest: resetCodeSendState,
      resetPasswordRequest: {
        ...resetPasswordInitialState.resetPasswordRequest,
        isResetPasswordFailed: true,
      },
    });
  });

  it('should handle GET_RESET_PASSWORD_SUCCESS', () => {
    expect(
      resetPassword(resetPasswordRequestState, {
        type: GET_RESET_PASSWORD_SUCCESS,
      })
    ).toEqual({
      sendResetCodeRequest: resetPasswordInitialState.sendResetCodeRequest,
      resetPasswordRequest: {
        ...resetPasswordInitialState.resetPasswordRequest,
        isResetPasswordSuccess: true,
      },
    });
  });
});
