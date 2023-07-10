import api from '../../utils/api';
import {
  GET_INGREDIENT_FEED,
  GET_INGREDIENT_FEED_FAILED,
  GET_INGREDIENT_FEED_SUCCESS,
  SET_INGREDIENTS,
  SET_CONSTRUCTOR,
  SET_CURRENT_INGREDIENT,
  DELETE_CURRENT_INGREDIENT,
} from '../сonstants/actions';
import { IIngredient } from '../../types/store-interface';
import { AppDispatch } from '../../types/thunk-dispatch-types';

interface IIngredientFeed {
  readonly type: typeof GET_INGREDIENT_FEED;
}

interface IIngredientFeedFailed {
  readonly type: typeof GET_INGREDIENT_FEED_FAILED;
}

interface IIngredientFeedSuccess {
  readonly type: typeof GET_INGREDIENT_FEED_SUCCESS;
}

interface ISetIngredient {
  readonly type: typeof SET_INGREDIENTS;
  readonly payload: {
    readonly ingredients: Array<IIngredient>;
  };
}
interface ISetCurrentIngredient {
  readonly type: typeof SET_CURRENT_INGREDIENT;
  readonly payload: {
    readonly ingredient: string;
  };
}

interface IDeleteCurrentIngredient {
  readonly type: typeof DELETE_CURRENT_INGREDIENT;
}

export type TIngredient =
  | IIngredientFeed
  | IIngredientFeedFailed
  | IIngredientFeedSuccess
  | ISetIngredient
  | ISetCurrentIngredient
  | IDeleteCurrentIngredient;

export const getIngredientsFeed = () => (dispatch: AppDispatch) => {
  dispatch({
    type: GET_INGREDIENT_FEED,
  });
  api
    .getIngredients()
    .then((res: Array<IIngredient>) => {
      if (res.find((item) => item.type === 'bun')) {
        dispatch({
          type: SET_INGREDIENTS,
          payload: {
            ingredients: res,
          },
        });
        return res;
      } else {
        return Promise.reject(401);
      }
    })
    .then((res: Array<IIngredient>) =>
      dispatch({
        type: SET_CONSTRUCTOR,
        payload: {
          bun: res.find((item) => item.type === 'bun') || null,
          ingredients: res.filter((item) => item.type !== 'bun'),
        },
      })
    )
    .then(() =>
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
