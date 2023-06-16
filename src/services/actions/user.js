import api from '../../utils/api';
import cookie from '../../utils/cookie';

const GET_USER_INFO_FEED = 'GET_USER_INFO_FEED';

const GET_USER_INFO_FEED_FAILED = 'GET_USER_INFO_FEED_FAILED';

const GET_USER_INFO_FEED_SUCCESS = 'GET_USER_INFO_FEED_SUCCESS';

const CHANGE_USER_INFO_FEED = 'CHANGE_USER_INFO_FEED';

const CHANGE_USER_INFO_FEED_FAILED = 'CHANGE_USER_INFO_FEED_FAILED';

const CHANGE_USER_INFO_FEED_SUCCESS = 'CHANGE_USER_INFO_FEED_SUCCESS';

const GET_TOKEN_FEED = 'GET_TOKEN_FEED';

const GET_TOKEN_SUCCESS = 'GET_TOKEN_SUCCESS';

const GET_TOKEN_FAILED = 'GET_TOKEN_FAILED';

const refreshToken = (previousAction, props, failType) => {
  return function (dispatch) {
    dispatch({
      type: GET_TOKEN_FEED,
    });
    api
      .refreshToken()
      .then((res) => {
        if (res.accessToken.startsWith('Bearer ')) {
          cookie.setCookie('accessToken', res.accessToken.slice(7), {
            expires: 1200,
            path: '/',
          });
          localStorage.setItem('token', res.refreshToken);
          dispatch({
            type: GET_TOKEN_SUCCESS,
          });
        }
      })
      .then(() => dispatch(previousAction(props)))
      .catch(() => {
        dispatch({
          type: GET_TOKEN_FAILED,
        });
        dispatch({
          type: failType,
        });
      });
  };
};

const getUserInfo = () => {
  return function (dispatch) {
    dispatch({
      type: GET_USER_INFO_FEED,
    });
    api
      .getProfileInfo()
      .then((res) => {
        dispatch({
          type: GET_USER_INFO_FEED_SUCCESS,
          payload: {
            name: res.user.name,
            email: res.user.email,
          },
        });
      })
      .catch((err) => {
        if (err === 403) {
          dispatch(refreshToken(getUserInfo, null, GET_USER_INFO_FEED_FAILED));
        } else {
          dispatch({
            type: GET_USER_INFO_FEED_FAILED,
          });
        }
      });
  };
};

const changeUserInfo = ({ email, name, password }) => {
  return function (dispatch) {
    dispatch({
      type: CHANGE_USER_INFO_FEED,
    });
    api
      .changeProfileInfo({ email, name, password })
      .then((res) => {
        dispatch({
          type: CHANGE_USER_INFO_FEED_SUCCESS,
          payload: {
            name: res.user.name,
            email: res.user.email,
          },
        });
      })
      .catch((err) => {
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
};

export { refreshToken, getUserInfo, changeUserInfo };
