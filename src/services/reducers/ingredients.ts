import { TIngredient } from '../actions/ingredients';
import { IIngredientState } from '../../types/store-interface';
import {
  GET_INGREDIENT_FEED,
  GET_INGREDIENT_FEED_FAILED,
  GET_INGREDIENT_FEED_SUCCESS,
  SET_INGREDIENTS,
  SET_CURRENT_INGREDIENT,
  DELETE_CURRENT_INGREDIENT,
} from '../сonstants/actions';

const ingredientsInitialState: IIngredientState = {
  buns: null,
  sauces: null,
  mains: null,
  ingredientsRequest: false,
  ingredientsFeedFailed: false,
  ingredientsFeedSuccess: false,
  currentIngredient: null,
};

const ingredients = (
  state = ingredientsInitialState,
  action: TIngredient
): IIngredientState => {
  switch (action.type) {
    case GET_INGREDIENT_FEED:
      return {
        ...state,
        ingredientsRequest: true,
      };

    case GET_INGREDIENT_FEED_FAILED:
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsFeedFailed: true,
      };

    case GET_INGREDIENT_FEED_SUCCESS:
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsFeedFailed: false,
        ingredientsFeedSuccess: true,
      };

    case SET_INGREDIENTS:
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsFeedFailed: false,

        buns: action.payload.ingredients.filter((item) => item.type === 'bun'),
        sauces: action.payload.ingredients.filter(
          (item) => item.type === 'sauce'
        ),
        mains: action.payload.ingredients.filter(
          (item) => item.type === 'main'
        ),
      };
    case SET_CURRENT_INGREDIENT:
      return {
        ...state,
        currentIngredient:
          (state.buns !== null &&
            state.buns.find(
              (item) => item._id === action.payload.ingredient
            )) ||
          (state.sauces !== null &&
            state.sauces.find(
              (item) => item._id === action.payload.ingredient
            )) ||
          (state.mains !== null &&
            state.mains.find(
              (item) => item._id === action.payload.ingredient
            )) ||
          null,
      };
    case DELETE_CURRENT_INGREDIENT:
      return {
        ...state,
        currentIngredient: null,
      };
    default:
      return state;
  }
};

export default ingredients;
