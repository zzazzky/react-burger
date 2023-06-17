const profileInitialState = {
  user: {
    email: null,
    name: null,
    isLoggedIn: false,
  },
  authRequest: {
    isAuthRequest: false,
    isAuthRequestSuccess: false,
    isAuthRequestFailed: false,
  },
  logoutRequest: {
    isLogoutRequest: false,
    isLogoutRequestSuccess: false,
    isLogoutRequestFailed: false,
  },
  tokenRequest: {
    isTokenRequest: false,
    isTokenRequestSuccess: false,
    isTokenRequestFailed: false,
  },
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
  userInfoRequest: {
    isUserInfoRequest: false,
    isUserInfoRequestSuccess: false,
    isUserInfoRequestFailed: false,
  },
  changeUserInfoRequest: {
    isChangeUserInfoRequest: false,
    isChangeUserInfoRequestFailed: false,
    isChangeUserInfoRequestSuccess: false,
  },
};

const profile = (state = profileInitialState, action) => {
  switch (action.type) {
    case 'GET_RESET_CODE_FEED':
      return {
        ...state,
        sendResetCodeRequest: {
          ...state.sendResetCodeRequest,
          isResetCodeRequest: true,
        },
      };

    case 'GET_RESET_CODE_FAILED':
      return {
        ...state,
        sendResetCodeRequest: {
          ...state.sendResetCodeRequest,
          isResetCodeRequest: false,
          isResetCodeFailed: true,
          isResetCodeSuccess: false,
        },
      };

    case 'GET_RESET_CODE_SUCCESS':
      return {
        ...state,
        sendResetCodeRequest: {
          ...state.sendResetCodeRequest,
          isResetCodeRequest: false,
          isResetCodeFailed: false,
          isResetCodeSuccess: true,
        },
      };

    case 'GET_RESET_PASSWORD_FEED':
      return {
        ...state,
        resetPasswordRequest: {
          ...state.resetPasswordRequest,
          isResetPasswordRequest: true,
        },
      };

    case 'GET_RESET_PASSWORD_FAILED':
      return {
        ...state,
        resetPasswordRequest: {
          ...state.resetPasswordRequest,
          isResetPasswordRequest: false,
          isResetPasswordFailed: true,
          isResetPasswordSuccess: false,
        },
      };

    case 'GET_RESET_PASSWORD_SUCCESS':
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

    case 'GET_AUTH_FEED':
      return {
        ...state,
        authRequest: {
          ...state.authRequest,
          isAuthRequest: true,
        },
      };

    case 'GET_AUTH_FEED_FAILED':
      return {
        ...state,
        authRequest: {
          ...state.authRequest,
          isAuthRequest: false,
          isAuthRequestFailed: true,
          isAuthRequestSuccess: false,
        },
      };

    case 'GET_AUTH_FEED_SUCCESS':
      return {
        ...state,
        authRequest: {
          ...state.authRequest,
          isAuthRequest: false,
          isAuthRequestFailed: false,
          isAuthRequestSuccess: true,
        },
        user: {
          email: action.payload.email,
          name: action.payload.name,
          isLoggedIn: true,
        },
      };

    case 'GET_LOGOUT_FEED':
      return {
        ...state,
        logoutRequest: {
          ...state.logoutRequest,
          isLogoutRequest: true,
        },
      };

    case 'GET_LOGOUT_FEED_FAILED':
      return {
        ...state,
        logoutRequest: {
          ...state.logoutRequest,
          isLogoutRequest: false,
          isLogoutRequestFailed: true,
          isLogoutRequestSuccess: false,
        },
      };

    case 'GET_LOGOUT_FEED_SUCCESS':
      return {
        ...state,
        logoutRequest: {
          ...state.logoutRequest,
          isLogoutRequest: false,
          isLogoutRequestFailed: false,
          isLogoutRequestSuccess: true,
        },
        user: {
          isLoggedIn: false,
        },
      };

    case 'GET_TOKEN_FEED':
      return {
        ...state,
        tokenRequest: {
          ...state.tokenRequest,
          isTokenRequest: true,
        },
      };

    case 'GET_TOKEN_FAILED':
      return {
        ...state,
        tokenRequest: {
          ...state.tokenRequest,
          isTokenRequest: false,
          isTokenRequestFailed: true,
          isTokenRequestSuccess: false,
        },
      };

    case 'GET_TOKEN_SUCCESS':
      return {
        ...state,
        tokenRequest: {
          ...state.tokenRequest,
          isTokenRequest: false,
          isTokenRequestFailed: false,
          isTokenRequestSuccess: true,
        },
      };

    case 'GET_USER_INFO_FEED':
      return {
        ...state,
        userInfoRequest: {
          ...state.userInfoRequest,
          isUserInfoRequest: true,
        },
      };

    case 'GET_USER_INFO_FEED_FAILED':
      return {
        ...state,
        userInfoRequest: {
          ...state.userInfoRequest,
          isUserInfoRequest: false,
          isUserInfoRequestFailed: true,
          isUserInfoRequestSuccess: false,
        },
      };

    case 'GET_USER_INFO_FEED_SUCCESS':
      return {
        ...state,
        userInfoRequest: {
          ...state.userInfoRequest,
          isUserInfoRequest: false,
          isUserInfoRequestFailed: false,
          isUserInfoRequestSuccess: true,
        },
        user: {
          name: action.payload.name,
          email: action.payload.email,
          isLoggedIn: true,
        },
      };

    case 'CHANGE_USER_INFO_FEED':
      return {
        ...state,
        changeUserInfoRequest: {
          ...state.changeUserInfoRequest,
          isChangeUserInfoRequest: true,
        },
      };

    case 'CHANGE_USER_INFO_FEED_FAILED':
      return {
        ...state,
        changeUserInfoRequest: {
          ...state.changeUserInfoRequest,
          isChangeUserInfoRequest: false,
          isChangeUserInfoRequestFailed: true,
          isChangeUserInfoRequestSuccess: false,
        },
      };

    case 'CHANGE_USER_INFO_FEED_SUCCESS':
      return {
        ...state,
        changeUserInfoRequest: {
          ...state.changeUserInfoRequest,
          isChangeUserInfoRequest: false,
          isChangeUserInfoRequestFailed: false,
          isChangeUserInfoRequestSuccess: true,
        },
        user: {
          ...state.user,
          name: action.payload.name,
          email: action.payload.email,
        },
      };

    default:
      return state;
  }
};

export default profile;
