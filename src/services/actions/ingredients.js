import api from '../../utils/api';

const SET_CURRENT_INGREDIENT = 'SET_CURRENT_INGREDIENT';

const DELETE_CURRENT_INGREDIENT = 'DELETE_CURRENT_INGREDIENT';

const GET_INGREDIENT_FEED = 'GET_INGREDIENT_FEED';

const GET_INGREDIENT_FEED_FAILED = 'GET_INGREDIENT_FEED_FAILED';

const GET_INGREDIENT_FEED_SUCCESS = 'GET_INGREDIENT_FEED_SUCCESS';

const SET_INGREDIENTS = 'SET_INGREDIENTS';

const SET_CONSTRUCTOR = 'SET_CONSTRUCTOR';

const getIngredientsFeed = () => {
  return function (dispatch) {
    dispatch({
      type: GET_INGREDIENT_FEED,
    });
    api
      .getIngredients()
      .then((res) => {
        dispatch({
          type: SET_INGREDIENTS,
          payload: {
            ingredients: res,
          },
        });
        return res;
      })
      .then((res) =>
        dispatch({
          type: SET_CONSTRUCTOR,
          payload: {
            ingredients: res,
          },
        })
      )
      .then((res) =>
        dispatch({
          type: GET_INGREDIENT_FEED_SUCCESS,
        })
      )
      .catch(() =>
        dispatch({
          type: GET_INGREDIENT_FEED_FAILED,
        })
      );
  };
};

export {
  SET_CURRENT_INGREDIENT,
  DELETE_CURRENT_INGREDIENT,
  getIngredientsFeed,
};
