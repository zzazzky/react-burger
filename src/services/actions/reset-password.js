import api from '../../utils/api';

const GET_RESET_CODE_FEED = 'GET_RESET_CODE_FEED';

const GET_RESET_CODE_FAILED = 'GET_RESET_CODE_FAILED';

const GET_RESET_CODE_SUCCESS = 'GET_RESET_CODE_SUCCESS';

const GET_RESET_PASSWORD_FEED = 'GET_RESET_PASSWORD_FEED';

const GET_RESET_PASSWORD_FAILED = 'GET_RESET_PASSWORD_FAILED';

const GET_RESET_PASSWORD_SUCCESS = 'GET_RESET_PASSWORD_SUCCESS';

const sendResetCode = ({ email }) => {
  return function (dispatch) {
    dispatch({
      type: GET_RESET_CODE_FEED,
    });
    api
      .setResetCode(email)
      .then(() =>
        dispatch({
          type: GET_RESET_CODE_SUCCESS,
        })
      )
      .catch(() => {
        dispatch({
          type: GET_RESET_CODE_FAILED,
        });
      });
  };
};

const resetPassword = ({ password, token }) => {
  return function (dispatch) {
    dispatch({
      type: GET_RESET_PASSWORD_FEED,
    });
    api
      .resetPassword({ password, token })
      .then(() =>
        dispatch({
          type: GET_RESET_PASSWORD_SUCCESS,
        })
      )
      .catch(() => {
        dispatch({
          type: GET_RESET_PASSWORD_FAILED,
        });
      });
  };
};

export { sendResetCode, resetPassword };
