import {
  ingredients,
  ingredientsInitialState,
} from '../../../services/reducers/ingredients';
import {
  GET_INGREDIENT_FEED,
  GET_INGREDIENT_FEED_FAILED,
  GET_INGREDIENT_FEED_SUCCESS,
  SET_INGREDIENTS,
  SET_CURRENT_INGREDIENT,
  DELETE_CURRENT_INGREDIENT,
} from '../../../services/сonstants/actions';
import { cratorBun, beef, sauce } from './test-ingredients';

const ingredientsRequestState = {
  ...ingredientsInitialState,
  ingredientsRequest: true,
};

const ingredientsState = { buns: [cratorBun], sauces: [sauce], mains: [beef] };

const filledState = {
  ...ingredientsState,
  ingredientsRequest: false,
  ingredientsFeedFailed: false,
  ingredientsFeedSuccess: true,
  currentIngredient: null,
};

describe('ingredients reducer', () => {
  it('should return the initial state', () => {
    expect(ingredients(undefined, {})).toEqual(ingredientsInitialState);
  });

  it('should handle GET_INGREDIENT_FEED', () => {
    expect(
      ingredients(ingredientsInitialState, {
        type: GET_INGREDIENT_FEED,
      })
    ).toEqual(ingredientsRequestState);
  });

  it('should handle GET_INGREDIENT_FEED_FAILED', () => {
    expect(
      ingredients(ingredientsRequestState, {
        type: GET_INGREDIENT_FEED_FAILED,
      })
    ).toEqual({
      ...ingredientsInitialState,
      ingredientsFeedFailed: true,
    });
  });

  it('should handle GET_INGREDIENT_FEED_SUCCESS', () => {
    expect(
      ingredients(ingredientsRequestState, {
        type: GET_INGREDIENT_FEED_SUCCESS,
      })
    ).toEqual({
      ...ingredientsInitialState,
      ingredientsFeedSuccess: true,
    });
  });

  it('should handle SET_INGREDIENTS', () => {
    expect(
      ingredients(
        {
          ...ingredientsInitialState,
          ingredientsFeedSuccess: true,
        },
        {
          type: SET_INGREDIENTS,
          payload: {
            ingredients: [cratorBun, beef, sauce],
          },
        }
      )
    ).toEqual(filledState);
  });

  it('should handle SET_CURRENT_INGREDIENT (bun)', () => {
    expect(
      ingredients(filledState, {
        type: SET_CURRENT_INGREDIENT,
        payload: {
          ingredient: '60666c42cc7b410027a1a9b1',
        },
      })
    ).toEqual({
      ...filledState,
      currentIngredient: cratorBun,
    });
  });

  it('should handle SET_CURRENT_INGREDIENT (sauce)', () => {
    expect(
      ingredients(filledState, {
        type: SET_CURRENT_INGREDIENT,
        payload: {
          ingredient: '60666c42cc7b410027a1a9b7',
        },
      })
    ).toEqual({
      ...filledState,
      currentIngredient: sauce,
    });
  });

  it('should handle SET_CURRENT_INGREDIENT (main)', () => {
    expect(
      ingredients(filledState, {
        type: SET_CURRENT_INGREDIENT,
        payload: {
          ingredient: '60666c42cc7b410027a1a9b5',
        },
      })
    ).toEqual({
      ...filledState,
      currentIngredient: beef,
    });
  });

  it('should handle DELETE_CURRENT_INGREDIENT', () => {
    expect(
      ingredients(
        {
          ...filledState,
          currentIngredient: beef,
        },
        {
          type: DELETE_CURRENT_INGREDIENT,
        }
      )
    ).toEqual(filledState);
  });
});
