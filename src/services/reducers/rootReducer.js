const initialState = {
  ingredients: {
    buns: [],
    sauces: [],
    mains: [],
    ingredientsRequest: false,
    ingredientsFeedFailed: false,
    currentIngredient: {},
  },
  constructor: {
    bun: {},
    ingredients: [],
    sum: 0,
  },
  order: {
    currentOrder: {},
    orderRequest: false,
    orderFeedFailed: false,
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_INGREDIENT_FEED':
      return {
        ...state,
        ingredients: { ...state.ingredients, ingredientsRequest: true },
      };

    case 'GET_INGREDIENT_FEED_FAILED':
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          ingredientsRequest: false,
          ingredientsFeedFailed: true,
        },
      };

    case 'GET_INGREDIENT_FEED_SUCCESS':
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          ingredientsRequest: false,
          ingredientsFeedFailed: false,
        },
      };

    case 'SET_INGREDIENTS':
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          ingredientsRequest: false,
          ingredientsFeedFailed: false,
          buns: action.payload.ingredients.filter(
            (item) => item.type === 'bun'
          ),
          sauces: action.payload.ingredients.filter(
            (item) => item.type === 'sauce'
          ),
          mains: action.payload.ingredients.filter(
            (item) => item.type === 'main'
          ),
        },
      };

    case 'SET_CONSTRUCTOR':
      return {
        ...state,
        constructor: {
          ...state.constructor,
          bun: action.payload.ingredients.find((item) => item.type === 'bun'),
          ingredients: action.payload.ingredients.filter(
            (item) => item.type !== 'bun'
          ),
          sum:
            action.payload.ingredients.find((item) => item.type === 'bun')
              .price *
              2 +
            action.payload.ingredients
              .filter((item) => item.type !== 'bun')
              .reduce((accumulator, item) => {
                return accumulator + item.price;
              }, 0),
        },
      };

    case 'GET_ORDER_FEED':
      return {
        ...state,
        order: {
          ...state.order,
          orderRequest: true,
        },
      };

    case 'GET_ORDER_FEED_FAILED':
      return {
        ...state,
        order: {
          ...state.order,
          orderRequest: false,
          orderFeedFailed: true,
        },
      };

    case 'GET_ORDER_FEED_SUCCESS':
      return {
        ...state,
        order: {
          ...state.order,
          orderRequest: false,
          orderFeedFailed: false,
          currentOrder: {
            number: action.payload.number,
            name: action.payload.name,
          },
        },
      };
    case 'SET_CURRENT_INGREDIENT':
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          currentIngredient: action.payload.ingredient,
        },
      };
    case 'DELETE_CURRENT_INGREDIENT':
      return {
        ...state,
        ingredients: { ...state.ingredients, currentIngredient: {} },
      };
    case 'ADD_CONSTRUCTOR_INGREDIENT':
      return action.payload.ingredient.type === 'bun'
        ? {
            ...state,
            constructor: {
              ...state.constructor,
              bun: state.ingredients.buns.find(
                (item) => item._id === action.payload.ingredient._id
              ),
              sum:
                state.constructor.sum -
                state.constructor.bun.price * 2 +
                action.payload.ingredient.price * 2,
            },
          }
        : {
            ...state,
            constructor: {
              ...state.constructor,
              ingredients: [
                ...state.constructor.ingredients,
                action.payload.ingredient,
              ],
              sum: state.constructor.sum + action.payload.ingredient.price,
            },
          };
    case 'DELETE_CONSTRUCTOR_INGREDIENT':
      return {
        ...state,
        constructor: {
          ...state.constructor,
          ingredients: state.constructor.ingredients.filter(
            (item, index) => index !== action.payload.index
          ),
          sum: state.constructor.sum - action.payload.price,
        },
      };
    case 'SORT_CONSTRUCTOR_INGREDIENTS':
      state.constructor.ingredients.splice(
        action.payload.dropIndex,
        0,
        state.constructor.ingredients[action.payload.dragIndex]
      );

      action.payload.dragIndex < action.payload.dropIndex
        ? state.constructor.ingredients.splice(action.payload.dragIndex, 1)
        : state.constructor.ingredients.splice(action.payload.dragIndex + 1, 1);
      return {
        ...state,
        constructor: {
          ...state.constructor,
          ingredients: [...state.constructor.ingredients],
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
