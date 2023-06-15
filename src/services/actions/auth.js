import api from '../../utils/api';
import cookie from '../../utils/cookie';

const GET_AUTH_FEED = 'GET_AUTH_FEED';

const GET_AUTH_FEED_FAILED = 'GET_AUTH_FEED_FAILED';

const GET_AUTH_FEED_SUCCESS = 'GET_AUTH_FEED_SUCCESS';

const register = ({ name, email, password }) => {
  return function (dispatch) {
    dispatch({
      type: GET_AUTH_FEED,
    });
    api
      .signup({ name, email, password })
      .then((res) => {
        if (res.accessToken.startsWith('Bearer ')) {
          cookie.setCookie('accessToken', res.accessToken.slice(7), {
            expires: 1200,
          });
          localStorage.setItem('token', res.refreshToken);
          dispatch({
            type: GET_AUTH_FEED_SUCCESS,
            payload: {
              name: res.user.name,
              email: res.user.email,
            },
          });
        }
      })
      .catch(() => {
        dispatch({
          type: GET_AUTH_FEED_FAILED,
        });
      });
  };
};

const login = ({ email, password }) => {
  return function (dispatch) {
    dispatch({
      type: GET_AUTH_FEED,
    });
    api
      .login({ email, password })
      .then((res) => {
        if (res.accessToken.startsWith('Bearer ')) {
          cookie.setCookie('accessToken', res.accessToken.slice(7), {
            expires: 1200,
          });
          localStorage.setItem('token', res.refreshToken);
          dispatch({
            type: GET_AUTH_FEED_SUCCESS,
            payload: {
              name: res.user.name,
              email: res.user.email,
            },
          });
        }
      })
      .catch(() => {
        dispatch({
          type: GET_AUTH_FEED_FAILED,
        });
      });
  };
};

export { register, login };
