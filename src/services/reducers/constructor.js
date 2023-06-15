const constructorInitialState = {
  bun: null,
  ingredients: null,
  sum: 0,
};

const constructor = (state = constructorInitialState, action) => {
  switch (action.type) {
    case 'SET_CONSTRUCTOR':
      return {
        ...state,
        bun: action.payload.ingredients.find((item) => item.type === 'bun'),
        ingredients: action.payload.ingredients.filter(
          (item) => item.type !== 'bun'
        ),
        sum:
          action.payload.ingredients.find((item) => item.type === 'bun').price *
            2 +
          action.payload.ingredients
            .filter((item) => item.type !== 'bun')
            .reduce((accumulator, item) => {
              return accumulator + item.price;
            }, 0),
      };
    case 'SORT_CONSTRUCTOR_INGREDIENTS':
      state.ingredients.splice(
        action.payload.dropIndex,
        0,
        state.ingredients[action.payload.dragIndex]
      );

      action.payload.dragIndex < action.payload.dropIndex
        ? state.ingredients.splice(action.payload.dragIndex, 1)
        : state.ingredients.splice(action.payload.dragIndex + 1, 1);
      return {
        ...state,
        ingredients: [...state.ingredients],
      };
    case 'ADD_CONSTRUCTOR_INGREDIENT':
      return action.payload.ingredient.type === 'bun'
        ? {
            ...state,
            bun: action.payload.ingredient,
            sum:
              state.sum -
              state.bun.price * 2 +
              action.payload.ingredient.price * 2,
          }
        : {
            ...state,
            ingredients: [...state.ingredients, action.payload.ingredient],
            sum: state.sum + action.payload.ingredient.price,
          };

    case 'DELETE_CONSTRUCTOR_INGREDIENT':
      return {
        ...state,
        ingredients: state.ingredients.filter(
          (item, index) => index !== action.payload.index
        ),
        sum: state.sum - action.payload.price,
      };
    default:
      return state;
  }
};

export default constructor;
