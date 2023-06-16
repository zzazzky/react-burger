import api from '../../utils/api';
import { refreshToken } from './user';

const GET_ORDER_FEED = 'GET_ORDER_FEED';

const GET_ORDER_FEED_FAILED = 'GET_ORDER_FEED_FAILED';

const GET_ORDER_FEED_SUCCESS = 'GET_ORDER_FEED_SUCCESS';

const sendOrder = (ingredients) => {
  return function (dispatch) {
    dispatch({
      type: GET_ORDER_FEED,
    });
    api
      .postOrder(ingredients.map((ingredient) => ingredient._id))
      .then((res) =>
        dispatch({
          type: GET_ORDER_FEED_SUCCESS,
          payload: {
            name: res.name,
            number: res.order.number,
          },
        })
      )
      .catch((err) => {
        if (err === 403) {
          dispatch(refreshToken(sendOrder, ingredients, GET_ORDER_FEED_FAILED));
        } else {
          dispatch({
            type: GET_ORDER_FEED_FAILED,
          });
        }
      });
  };
};

export { sendOrder };
