import api from '../../utils/api';

const GET_LOGOUT_FEED = 'GET_LOGOUT_FEED';

const GET_LOGOUT_FEED_FAILED = 'GET_LOGOUT_FEED_FAILED';

const GET_LOGOUT_FEED_SUCCESS = 'GET_LOGOUT_FEED_SUCCESS';

const logout = () => {
  return function (dispatch) {
    dispatch({
      type: GET_LOGOUT_FEED,
    });
    api
      .logout()
      .then(() => {
        dispatch({
          type: GET_LOGOUT_FEED_SUCCESS,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_LOGOUT_FEED_FAILED,
        });
      });
  };
};

export { logout };
