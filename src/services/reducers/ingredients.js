const ingredientsInitialState = {
  buns: null,
  sauces: null,
  mains: null,
  ingredientsRequest: false,
  ingredientsFeedFailed: false,
  currentIngredient: null,
};

const ingredients = (state = ingredientsInitialState, action) => {
  switch (action.type) {
    case 'GET_INGREDIENT_FEED':
      return {
        ...state,
        ingredientsRequest: true,
      };

    case 'GET_INGREDIENT_FEED_FAILED':
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsFeedFailed: true,
      };

    case 'GET_INGREDIENT_FEED_SUCCESS':
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsFeedFailed: false,
      };

    case 'SET_INGREDIENTS':
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
    case 'SET_CURRENT_INGREDIENT':
      return {
        ...state,
        currentIngredient: action.payload.ingredient,
      };
    case 'DELETE_CURRENT_INGREDIENT':
      return {
        ...state,
        currentIngredient: null,
      };
    default:
      return state;
  }
};

export default ingredients;
