import {
  GET_USER_INFO_FEED,
  GET_USER_INFO_FEED_FAILED,
  GET_USER_INFO_FEED_SUCCESS,
  CHANGE_USER_INFO_FEED,
  CHANGE_USER_INFO_FEED_FAILED,
  CHANGE_USER_INFO_FEED_SUCCESS,
  GET_AUTH_FEED,
  GET_AUTH_FEED_FAILED,
  GET_AUTH_FEED_SUCCESS,
  GET_LOGOUT_FEED,
  GET_LOGOUT_FEED_FAILED,
  GET_LOGOUT_FEED_SUCCESS,
} from '../сonstants/actions';

import { IProfileState } from '../../types/store-interface';
import { TUser } from '../actions/user';
import { TAuth } from '../actions/auth';
import { TLogout } from '../actions/logout';

type TProfile = TUser | TAuth | TLogout;

const profileInitialState: IProfileState = {
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

const profile = (
  state = profileInitialState,
  action: TProfile
): IProfileState => {
  switch (action.type) {
    case GET_AUTH_FEED:
      return {
        ...state,
        authRequest: {
          ...state.authRequest,
          isAuthRequest: true,
        },
      };

    case GET_AUTH_FEED_FAILED:
      return {
        ...state,
        authRequest: {
          ...state.authRequest,
          isAuthRequest: false,
          isAuthRequestFailed: true,
          isAuthRequestSuccess: false,
        },
      };

    case GET_AUTH_FEED_SUCCESS:
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

    case GET_LOGOUT_FEED:
      return {
        ...state,
        logoutRequest: {
          ...state.logoutRequest,
          isLogoutRequest: true,
        },
      };

    case GET_LOGOUT_FEED_FAILED:
      return {
        ...state,
        logoutRequest: {
          ...state.logoutRequest,
          isLogoutRequest: false,
          isLogoutRequestFailed: true,
          isLogoutRequestSuccess: false,
        },
      };

    case GET_LOGOUT_FEED_SUCCESS:
      return {
        ...state,
        logoutRequest: {
          ...state.logoutRequest,
          isLogoutRequest: false,
          isLogoutRequestFailed: false,
          isLogoutRequestSuccess: true,
        },
        user: {
          email: null,
          name: null,
          isLoggedIn: false,
        },
      };

    case GET_USER_INFO_FEED:
      return {
        ...state,
        userInfoRequest: {
          ...state.userInfoRequest,
          isUserInfoRequest: true,
        },
      };

    case GET_USER_INFO_FEED_FAILED:
      return {
        ...state,
        userInfoRequest: {
          ...state.userInfoRequest,
          isUserInfoRequest: false,
          isUserInfoRequestFailed: true,
          isUserInfoRequestSuccess: false,
        },
      };

    case GET_USER_INFO_FEED_SUCCESS:
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

    case CHANGE_USER_INFO_FEED:
      return {
        ...state,
        changeUserInfoRequest: {
          ...state.changeUserInfoRequest,
          isChangeUserInfoRequest: true,
        },
      };

    case CHANGE_USER_INFO_FEED_FAILED:
      return {
        ...state,
        changeUserInfoRequest: {
          ...state.changeUserInfoRequest,
          isChangeUserInfoRequest: false,
          isChangeUserInfoRequestFailed: true,
          isChangeUserInfoRequestSuccess: false,
        },
      };

    case CHANGE_USER_INFO_FEED_SUCCESS:
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
