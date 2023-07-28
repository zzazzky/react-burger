import {
  profile,
  profileInitialState,
} from '../../../services/reducers/profile';
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

const testUser = { email: '1@ya.ru', name: 'test' };

const loggedInState = {
  ...testUser,
  isLoggedIn: true,
};

const authRequestState = {
  ...profileInitialState.authRequest,
  isAuthRequest: true,
};

const logoutRequestState = {
  ...profileInitialState.logoutRequest,
  isLogoutRequest: true,
};

const userInfoRequestState = {
  ...profileInitialState.userInfoRequest,
  isUserInfoRequest: true,
};

const changeUserInfoRequestState = {
  ...profileInitialState.changeUserInfoRequest,
  isChangeUserInfoRequest: true,
};

describe('profile reducer', () => {
  it('should return the initial state', () => {
    expect(profile(undefined, {})).toEqual(profileInitialState);
  });

  it('should handle GET_AUTH_FEED', () => {
    expect(
      profile(profileInitialState, {
        type: GET_AUTH_FEED,
      })
    ).toEqual({
      ...profileInitialState,
      authRequest: authRequestState,
    });
  });

  it('should handle GET_AUTH_FEED_FAILED', () => {
    expect(
      profile(
        {
          ...profileInitialState,
          authRequest: authRequestState,
        },
        {
          type: GET_AUTH_FEED_FAILED,
        }
      )
    ).toEqual({
      ...profileInitialState,
      authRequest: {
        ...profileInitialState.authRequest,
        isAuthRequestFailed: true,
      },
    });
  });

  it('should handle GET_AUTH_FEED_SUCCESS', () => {
    expect(
      profile(
        {
          ...profileInitialState,
          authRequest: authRequestState,
        },
        {
          type: GET_AUTH_FEED_SUCCESS,
          payload: testUser,
        }
      )
    ).toEqual({
      ...profileInitialState,
      user: loggedInState,
      authRequest: {
        ...profileInitialState.authRequest,
        isAuthRequestSuccess: true,
      },
    });
  });

  it('should handle GET_LOGOUT_FEED', () => {
    expect(
      profile(
        { ...profileInitialState, user: loggedInState },
        {
          type: GET_LOGOUT_FEED,
        }
      )
    ).toEqual({
      ...profileInitialState,
      user: loggedInState,
      logoutRequest: logoutRequestState,
    });
  });

  it('should handle GET_LOGOUT_FEED_FAILED', () => {
    expect(
      profile(
        {
          ...profileInitialState,
          user: loggedInState,
          logoutRequest: logoutRequestState,
        },
        {
          type: GET_LOGOUT_FEED_FAILED,
        }
      )
    ).toEqual({
      ...profileInitialState,
      user: loggedInState,
      logoutRequest: {
        ...profileInitialState.logoutRequest,
        isLogoutRequestFailed: true,
      },
    });
  });

  it('should handle GET_LOGOUT_FEED_SUCCESS', () => {
    expect(
      profile(
        {
          ...profileInitialState,
          user: loggedInState,
          logoutRequest: logoutRequestState,
        },
        {
          type: GET_LOGOUT_FEED_SUCCESS,
        }
      )
    ).toEqual({
      ...profileInitialState,
      logoutRequest: {
        ...profileInitialState.logoutRequest,
        isLogoutRequestSuccess: true,
      },
    });
  });

  it('should handle GET_USER_INFO_FEED', () => {
    expect(
      profile(profileInitialState, {
        type: GET_USER_INFO_FEED,
      })
    ).toEqual({
      ...profileInitialState,
      userInfoRequest: userInfoRequestState,
    });
  });

  it('should handle GET_USER_INFO_FEED_FAILED', () => {
    expect(
      profile(
        {
          ...profileInitialState,
          userInfoRequest: userInfoRequestState,
        },
        {
          type: GET_USER_INFO_FEED_FAILED,
        }
      )
    ).toEqual({
      ...profileInitialState,
      userInfoRequest: {
        ...profileInitialState.userInfoRequest,
        isUserInfoRequestFailed: true,
      },
    });
  });

  it('should handle GET_USER_INFO_FEED_SUCCESS', () => {
    expect(
      profile(
        {
          ...profileInitialState,
          userInfoRequest: userInfoRequestState,
        },
        {
          type: GET_USER_INFO_FEED_SUCCESS,
          payload: testUser,
        }
      )
    ).toEqual({
      ...profileInitialState,
      user: loggedInState,
      userInfoRequest: {
        ...profileInitialState.userInfoRequest,
        isUserInfoRequestSuccess: true,
      },
    });
  });

  it('should handle CHANGE_USER_INFO_FEED', () => {
    expect(
      profile(
        { ...profileInitialState, user: loggedInState },
        {
          type: CHANGE_USER_INFO_FEED,
        }
      )
    ).toEqual({
      ...profileInitialState,
      user: loggedInState,
      changeUserInfoRequest: changeUserInfoRequestState,
    });
  });

  it('should handle CHANGE_USER_INFO_FEED_FAILED', () => {
    expect(
      profile(
        {
          ...profileInitialState,
          user: loggedInState,
          changeUserInfoRequest: changeUserInfoRequestState,
        },
        {
          type: CHANGE_USER_INFO_FEED_FAILED,
        }
      )
    ).toEqual({
      ...profileInitialState,
      user: loggedInState,
      changeUserInfoRequest: {
        ...profileInitialState.changeUserInfoRequest,
        isChangeUserInfoRequestFailed: true,
      },
    });
  });

  it('should handle CHANGE_USER_INFO_FEED_SUCCESS', () => {
    expect(
      profile(
        {
          ...profileInitialState,
          user: loggedInState,
          changeUserInfoRequest: changeUserInfoRequestState,
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
      ...profileInitialState,
      user: {
        email: '2@ya.ru',
        name: 'test1',
        isLoggedIn: true,
      },
      changeUserInfoRequest: {
        ...profileInitialState.changeUserInfoRequest,
        isChangeUserInfoRequestSuccess: true,
      },
    });
  });
});
