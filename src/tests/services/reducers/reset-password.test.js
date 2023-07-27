import resetPassword from '../../../services/reducers/reset-password';
import {
  GET_RESET_CODE_FEED,
  GET_RESET_CODE_FAILED,
  GET_RESET_CODE_SUCCESS,
  GET_RESET_PASSWORD_FEED,
  GET_RESET_PASSWORD_FAILED,
  GET_RESET_PASSWORD_SUCCESS,
} from '../../../services/сonstants/actions';

describe('resetPassword reducer', () => {
  it('should return the initial state', () => {
    expect(resetPassword(undefined, {})).toEqual({
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
    });
  });

  it('should handle GET_RESET_CODE_FEED', () => {
    expect(
      resetPassword(
        {
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
        },
        {
          type: GET_RESET_CODE_FEED,
        }
      )
    ).toEqual({
      sendResetCodeRequest: {
        isResetCodeRequest: true,
        isResetCodeSuccess: false,
        isResetCodeFailed: false,
      },
      resetPasswordRequest: {
        isResetPasswordRequest: false,
        isResetPasswordSuccess: false,
        isResetPasswordFailed: false,
      },
    });
  });

  it('should handle GET_RESET_CODE_FAILED', () => {
    expect(
      resetPassword(
        {
          sendResetCodeRequest: {
            isResetCodeRequest: true,
            isResetCodeSuccess: false,
            isResetCodeFailed: false,
          },
          resetPasswordRequest: {
            isResetPasswordRequest: false,
            isResetPasswordSuccess: false,
            isResetPasswordFailed: false,
          },
        },
        {
          type: GET_RESET_CODE_FAILED,
        }
      )
    ).toEqual({
      sendResetCodeRequest: {
        isResetCodeRequest: false,
        isResetCodeFailed: true,
        isResetCodeSuccess: false,
      },
      resetPasswordRequest: {
        isResetPasswordRequest: false,
        isResetPasswordSuccess: false,
        isResetPasswordFailed: false,
      },
    });
  });

  it('should handle GET_RESET_CODE_SUCCESS', () => {
    expect(
      resetPassword(
        {
          sendResetCodeRequest: {
            isResetCodeRequest: true,
            isResetCodeSuccess: false,
            isResetCodeFailed: false,
          },
          resetPasswordRequest: {
            isResetPasswordRequest: false,
            isResetPasswordSuccess: false,
            isResetPasswordFailed: false,
          },
        },
        {
          type: GET_RESET_CODE_SUCCESS,
        }
      )
    ).toEqual({
      sendResetCodeRequest: {
        isResetCodeRequest: false,
        isResetCodeFailed: false,
        isResetCodeSuccess: true,
      },
      resetPasswordRequest: {
        isResetPasswordRequest: false,
        isResetPasswordSuccess: false,
        isResetPasswordFailed: false,
      },
    });
  });

  it('should handle GET_RESET_PASSWORD_FEED', () => {
    expect(
      resetPassword(
        {
          sendResetCodeRequest: {
            isResetCodeRequest: false,
            isResetCodeFailed: false,
            isResetCodeSuccess: true,
          },
          resetPasswordRequest: {
            isResetPasswordRequest: false,
            isResetPasswordSuccess: false,
            isResetPasswordFailed: false,
          },
        },
        {
          type: GET_RESET_PASSWORD_FEED,
        }
      )
    ).toEqual({
      sendResetCodeRequest: {
        isResetCodeRequest: false,
        isResetCodeFailed: false,
        isResetCodeSuccess: true,
      },
      resetPasswordRequest: {
        isResetPasswordRequest: true,
        isResetPasswordSuccess: false,
        isResetPasswordFailed: false,
      },
    });
  });

  it('should handle GET_RESET_PASSWORD_FAILED', () => {
    expect(
      resetPassword(
        {
          sendResetCodeRequest: {
            isResetCodeRequest: false,
            isResetCodeFailed: false,
            isResetCodeSuccess: true,
          },
          resetPasswordRequest: {
            isResetPasswordRequest: false,
            isResetPasswordFailed: true,
            isResetPasswordSuccess: false,
          },
        },
        {
          type: GET_RESET_PASSWORD_FAILED,
        }
      )
    ).toEqual({
      sendResetCodeRequest: {
        isResetCodeRequest: false,
        isResetCodeFailed: false,
        isResetCodeSuccess: true,
      },
      resetPasswordRequest: {
        isResetPasswordRequest: false,
        isResetPasswordFailed: true,
        isResetPasswordSuccess: false,
      },
    });
  });

  it('should handle GET_RESET_PASSWORD_SUCCESS', () => {
    expect(
      resetPassword(
        {
          sendResetCodeRequest: {
            isResetCodeRequest: false,
            isResetCodeFailed: false,
            isResetCodeSuccess: true,
          },
          resetPasswordRequest: {
            isResetPasswordRequest: true,
            isResetPasswordSuccess: false,
            isResetPasswordFailed: false,
          },
        },
        {
          type: GET_RESET_PASSWORD_SUCCESS,
        }
      )
    ).toEqual({
      sendResetCodeRequest: {
        isResetCodeRequest: false,
        isResetCodeSuccess: false,
        isResetCodeFailed: false,
      },
      resetPasswordRequest: {
        isResetPasswordRequest: false,
        isResetPasswordSuccess: true,
        isResetPasswordFailed: false,
      },
    });
  });
});
