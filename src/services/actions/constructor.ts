import { v4 as uuidv4 } from 'uuid';
import { IIngredient } from '../../types/store-interface';
import {
  DELETE_CONSTRUCTOR_INGREDIENT,
  ADD_CONSTRUCTOR_INGREDIENT,
  SORT_CONSTRUCTOR_INGREDIENTS,
  SET_CONSTRUCTOR,
} from '../сonstants/actions';
import { AppDispatch } from '../../types/thunk-dispatch-types';

interface ISetConstructor {
  readonly type: typeof SET_CONSTRUCTOR;
  readonly payload: {
    readonly bun: IIngredient | null;
    readonly ingredients: Array<IIngredient>;
  };
}

interface IDeleteConstructorIngredient {
  readonly type: typeof DELETE_CONSTRUCTOR_INGREDIENT;
  readonly payload: {
    readonly index: number;
    readonly price: number;
  };
}

interface IAddConstructorIngredient {
  readonly type: typeof ADD_CONSTRUCTOR_INGREDIENT;
  readonly payload: {
    readonly ingredient: IIngredient;
  };
}

interface ISortConstructorIngredient {
  readonly type: typeof SORT_CONSTRUCTOR_INGREDIENTS;
  readonly payload: {
    readonly dragIndex: number;
    readonly dropIndex: number;
  };
}

export type TConstructor =
  | ISetConstructor
  | IDeleteConstructorIngredient
  | IAddConstructorIngredient
  | ISortConstructorIngredient;

export const addIngredient =
  (ingredient: IIngredient) => (dispatch: AppDispatch) => {
    dispatch({
      type: ADD_CONSTRUCTOR_INGREDIENT,
      payload: {
        ingredient: { ...ingredient, uuid: uuidv4() },
      },
    });
  };
