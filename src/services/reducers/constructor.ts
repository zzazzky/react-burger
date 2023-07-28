import { TConstructor } from '../actions/constructor';
import {
  DELETE_CONSTRUCTOR_INGREDIENT,
  ADD_CONSTRUCTOR_INGREDIENT,
  SORT_CONSTRUCTOR_INGREDIENTS,
  SET_CONSTRUCTOR,
} from '../сonstants/actions';
import { IConstructorState } from '../../types/store-interface';

export const constructorInitialState: IConstructorState = {
  bun: null,
  ingredients: null,
  sum: 0,
};

export const constructor = (
  state = constructorInitialState,
  action: TConstructor
): IConstructorState => {
  switch (action.type) {
    case SET_CONSTRUCTOR:
      return {
        ...state,
        bun: action.payload.bun,
        ingredients: action.payload.ingredients,
        sum:
          action.payload.bun !== null
            ? action.payload.bun.price * 2 +
              action.payload.ingredients.reduce((accumulator, item) => {
                return accumulator + item.price;
              }, 0)
            : action.payload.ingredients.reduce((accumulator, item) => {
                return accumulator + item.price;
              }, 0),
      };
    case SORT_CONSTRUCTOR_INGREDIENTS:
      if (state.ingredients !== null) {
        const draggableIngredient = state.ingredients[action.payload.dragIndex];
        state.ingredients.splice(action.payload.dragIndex, 1);

        action.payload.dragIndex < action.payload.dropIndex
          ? state.ingredients.splice(
              action.payload.dropIndex - 1,
              0,
              draggableIngredient
            )
          : state.ingredients.splice(
              action.payload.dropIndex,
              0,
              draggableIngredient
            );

        return {
          ...state,
          ingredients: [...state.ingredients],
        };
      } else {
        return { ...state };
      }
    case ADD_CONSTRUCTOR_INGREDIENT:
      return action.payload.ingredient.type === 'bun'
        ? {
            ...state,
            bun: action.payload.ingredient,
            sum:
              state.bun !== null
                ? state.sum -
                  state.bun.price * 2 +
                  action.payload.ingredient.price * 2
                : state.sum + action.payload.ingredient.price * 2,
          }
        : {
            ...state,
            ingredients:
              state.ingredients !== null
                ? [...state.ingredients, action.payload.ingredient]
                : [action.payload.ingredient],
            sum: state.sum + action.payload.ingredient.price,
          };

    case DELETE_CONSTRUCTOR_INGREDIENT:
      if (state.ingredients !== null) {
        return {
          ...state,
          ingredients: state.ingredients.filter(
            (item, index) => index !== action.payload.index
          ),
          sum: state.sum - action.payload.price,
        };
      } else {
        return { ...state };
      }

    default:
      return state;
  }
};
