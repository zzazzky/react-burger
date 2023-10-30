import {
  constructor,
  constructorInitialState,
} from '../../../services/reducers/constructor';
import {
  DELETE_CONSTRUCTOR_INGREDIENT,
  ADD_CONSTRUCTOR_INGREDIENT,
  SORT_CONSTRUCTOR_INGREDIENTS,
  SET_CONSTRUCTOR,
} from '../../../services/сonstants/actions';
import {
  cratorBun,
  beef,
  cheese,
  sauce,
  fluorescentBun,
} from './test-ingredients';

const filledState = {
  bun: cratorBun,
  ingredients: [beef, sauce, cheese],
  sum: 9742,
};

describe('constructor reducer', () => {
  it('should return the initial state', () => {
    expect(constructor(undefined, {})).toEqual(constructorInitialState);
  });

  it('should handle SET_CONSTRUCTOR', () => {
    expect(
      constructor(constructorInitialState, {
        type: SET_CONSTRUCTOR,
        payload: {
          bun: cratorBun,
          ingredients: [beef, sauce, cheese],
        },
      })
    ).toEqual(filledState);
  });

  it('should handle ADD_CONSTRUCTOR_INGREDIENT (bun)', () => {
    expect(
      constructor(filledState, {
        type: ADD_CONSTRUCTOR_INGREDIENT,
        payload: {
          ingredient: fluorescentBun,
        },
      })
    ).toEqual({
      bun: fluorescentBun,
      ingredients: [beef, sauce, cheese],
      sum: 9208,
    });
  });

  it('should handle ADD_CONSTRUCTOR_INGREDIENT (ingredient)', () => {
    expect(
      constructor(
        {
          bun: cratorBun,
          ingredients: [beef, sauce],
          sum: 5600,
        },
        {
          type: ADD_CONSTRUCTOR_INGREDIENT,
          payload: {
            ingredient: cheese,
          },
        }
      )
    ).toEqual(filledState);
  });

  it('should handle DELETE_CONSTRUCTOR_INGREDIENT', () => {
    expect(
      constructor(filledState, {
        type: DELETE_CONSTRUCTOR_INGREDIENT,
        payload: {
          index: 1,
          price: 90,
        },
      })
    ).toEqual({
      bun: cratorBun,
      ingredients: [beef, cheese],
      sum: 9652,
    });
  });

  it('should handle SORT_CONSTRUCTOR_INGREDIENTS (up)', () => {
    expect(
      constructor(filledState, {
        type: SORT_CONSTRUCTOR_INGREDIENTS,
        payload: {
          dropIndex: 0,
          dragIndex: 2,
        },
      })
    ).toEqual({
      bun: cratorBun,
      ingredients: [cheese, beef, sauce],
      sum: 9742,
    });
  });

  it('should handle SORT_CONSTRUCTOR_INGREDIENTS (down)', () => {
    expect(
      constructor(
        {
          bun: cratorBun,
          ingredients: [beef, sauce, cheese],
          sum: 9742,
        },
        {
          type: SORT_CONSTRUCTOR_INGREDIENTS,
          payload: {
            dropIndex: 2,
            dragIndex: 0,
          },
        }
      )
    ).toEqual({
      bun: cratorBun,
      ingredients: [sauce, beef, cheese],
      sum: 9742,
    });
  });
});
