import profile from '../../../services/reducers/profile';
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
} from '../../../services/сonstants/actions';

describe('profile reducer', () => {
  it('should return the initial state', () => {
    expect(profile(undefined, {})).toEqual({
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
    });
  });

  it('should handle GET_AUTH_FEED', () => {
    expect(
      profile(
        {
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
        },
        {
          type: GET_AUTH_FEED,
        }
      )
    ).toEqual({
      user: {
        email: null,
        name: null,
        isLoggedIn: false,
      },
      authRequest: {
        isAuthRequest: true,
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
    });
  });

  it('should handle GET_AUTH_FEED_FAILED', () => {
    expect(
      profile(
        {
          user: {
            email: null,
            name: null,
            isLoggedIn: false,
          },
          authRequest: {
            isAuthRequest: true,
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
        },
        {
          type: GET_AUTH_FEED_FAILED,
        }
      )
    ).toEqual({
      user: {
        email: null,
        name: null,
        isLoggedIn: false,
      },
      authRequest: {
        isAuthRequest: false,
        isAuthRequestSuccess: false,
        isAuthRequestFailed: true,
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
    });
  });

  it('should handle GET_AUTH_FEED_SUCCESS', () => {
    expect(
      profile(
        {
          user: {
            email: null,
            name: null,
            isLoggedIn: false,
          },
          authRequest: {
            isAuthRequest: true,
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
        },
        {
          type: GET_AUTH_FEED_SUCCESS,
          payload: {
            email: '1@ya.ru',
            name: 'test',
          },
        }
      )
    ).toEqual({
      user: {
        email: '1@ya.ru',
        name: 'test',
        isLoggedIn: true,
      },
      authRequest: {
        isAuthRequest: false,
        isAuthRequestSuccess: true,
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
    });
  });

  it('should handle GET_LOGOUT_FEED', () => {
    expect(
      profile(
        {
          user: {
            email: '1@ya.ru',
            name: 'test',
            isLoggedIn: true,
          },
          authRequest: {
            isAuthRequest: false,
            isAuthRequestSuccess: true,
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
        },
        {
          type: GET_LOGOUT_FEED,
        }
      )
    ).toEqual({
      user: {
        email: '1@ya.ru',
        name: 'test',
        isLoggedIn: true,
      },
      authRequest: {
        isAuthRequest: false,
        isAuthRequestSuccess: true,
        isAuthRequestFailed: false,
      },
      logoutRequest: {
        isLogoutRequest: true,
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
    });
  });

  it('should handle GET_LOGOUT_FEED_FAILED', () => {
    expect(
      profile(
        {
          user: {
            email: '1@ya.ru',
            name: 'test',
            isLoggedIn: true,
          },
          authRequest: {
            isAuthRequest: false,
            isAuthRequestSuccess: true,
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
        },
        {
          type: GET_LOGOUT_FEED_FAILED,
        }
      )
    ).toEqual({
      user: {
        email: '1@ya.ru',
        name: 'test',
        isLoggedIn: true,
      },
      authRequest: {
        isAuthRequest: false,
        isAuthRequestSuccess: true,
        isAuthRequestFailed: false,
      },
      logoutRequest: {
        isLogoutRequest: false,
        isLogoutRequestSuccess: false,
        isLogoutRequestFailed: true,
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
    });
  });

  it('should handle GET_LOGOUT_FEED_SUCCESS', () => {
    expect(
      profile(
        {
          user: {
            email: '1@ya.ru',
            name: 'test',
            isLoggedIn: true,
          },
          authRequest: {
            isAuthRequest: false,
            isAuthRequestSuccess: true,
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
        },
        {
          type: GET_LOGOUT_FEED_SUCCESS,
        }
      )
    ).toEqual({
      user: {
        email: null,
        name: null,
        isLoggedIn: false,
      },
      authRequest: {
        isAuthRequest: false,
        isAuthRequestSuccess: true,
        isAuthRequestFailed: false,
      },
      logoutRequest: {
        isLogoutRequest: false,
        isLogoutRequestFailed: false,
        isLogoutRequestSuccess: true,
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
    });
  });

  it('should handle GET_USER_INFO_FEED', () => {
    expect(
      profile(
        {
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
        },
        {
          type: GET_USER_INFO_FEED,
        }
      )
    ).toEqual({
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
        isUserInfoRequest: true,
        isUserInfoRequestSuccess: false,
        isUserInfoRequestFailed: false,
      },
      changeUserInfoRequest: {
        isChangeUserInfoRequest: false,
        isChangeUserInfoRequestFailed: false,
        isChangeUserInfoRequestSuccess: false,
      },
    });
  });

  it('should handle GET_USER_INFO_FEED_FAILED', () => {
    expect(
      profile(
        {
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
            isUserInfoRequest: true,
            isUserInfoRequestFailed: false,
            isUserInfoRequestSuccess: false,
          },
          changeUserInfoRequest: {
            isChangeUserInfoRequest: false,
            isChangeUserInfoRequestFailed: false,
            isChangeUserInfoRequestSuccess: false,
          },
        },
        {
          type: GET_USER_INFO_FEED_FAILED,
        }
      )
    ).toEqual({
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
        isUserInfoRequestFailed: true,
      },
      changeUserInfoRequest: {
        isChangeUserInfoRequest: false,
        isChangeUserInfoRequestFailed: false,
        isChangeUserInfoRequestSuccess: false,
      },
    });
  });

  it('should handle GET_USER_INFO_FEED_SUCCESS', () => {
    expect(
      profile(
        {
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
            isUserInfoRequest: true,
            isUserInfoRequestSuccess: false,
            isUserInfoRequestFailed: false,
          },
          changeUserInfoRequest: {
            isChangeUserInfoRequest: false,
            isChangeUserInfoRequestFailed: false,
            isChangeUserInfoRequestSuccess: false,
          },
        },
        {
          type: GET_USER_INFO_FEED_SUCCESS,
          payload: {
            email: '1@ya.ru',
            name: 'test',
          },
        }
      )
    ).toEqual({
      user: {
        email: '1@ya.ru',
        name: 'test',
        isLoggedIn: true,
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
        isUserInfoRequestSuccess: true,
        isUserInfoRequestFailed: false,
      },
      changeUserInfoRequest: {
        isChangeUserInfoRequest: false,
        isChangeUserInfoRequestFailed: false,
        isChangeUserInfoRequestSuccess: false,
      },
    });
  });

  it('should handle CHANGE_USER_INFO_FEED', () => {
    expect(
      profile(
        {
          user: {
            email: '1@ya.ru',
            name: 'test',
            isLoggedIn: true,
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
        },
        {
          type: CHANGE_USER_INFO_FEED,
        }
      )
    ).toEqual({
      user: {
        email: '1@ya.ru',
        name: 'test',
        isLoggedIn: true,
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
        isChangeUserInfoRequest: true,
        isChangeUserInfoRequestFailed: false,
        isChangeUserInfoRequestSuccess: false,
      },
    });
  });

  it('should handle CHANGE_USER_INFO_FEED_FAILED', () => {
    expect(
      profile(
        {
          user: {
            email: '1@ya.ru',
            name: 'test',
            isLoggedIn: true,
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
            isChangeUserInfoRequest: true,
            isChangeUserInfoRequestFailed: false,
            isChangeUserInfoRequestSuccess: false,
          },
        },
        {
          type: CHANGE_USER_INFO_FEED_FAILED,
        }
      )
    ).toEqual({
      user: {
        email: '1@ya.ru',
        name: 'test',
        isLoggedIn: true,
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
        isChangeUserInfoRequestFailed: true,
        isChangeUserInfoRequestSuccess: false,
      },
    });
  });

  it('should handle CHANGE_USER_INFO_FEED_SUCCESS', () => {
    expect(
      profile(
        {
          user: {
            email: '1@ya.ru',
            name: 'test',
            isLoggedIn: true,
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
        },
        {
          type: CHANGE_USER_INFO_FEED_SUCCESS,
          payload: {
            email: '2@ya.ru',
            name: 'test1',
          },
        }
      )
    ).toEqual({
      user: {
        email: '2@ya.ru',
        name: 'test1',
        isLoggedIn: true,
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
        isChangeUserInfoRequestSuccess: true,
      },
    });
  });
});
