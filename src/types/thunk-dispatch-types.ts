import { ThunkDispatch } from 'redux-thunk';
import { TOrder } from '../services/actions/order';
import { TIngredient } from '../services/actions/ingredients';
import { TUser } from '../services/actions/user';
import { TAuth } from '../services/actions/auth';
import { TLogout } from '../services/actions/logout';
import { TConstructor } from '../services/actions/constructor';
import { TToken } from '../services/actions/token';
import { TResetPasswordFeed } from '../services/actions/reset-password';
import store from '../services/store/store';
export type TAppAction =
  | TOrder
  | TIngredient
  | TUser
  | TAuth
  | TLogout
  | TConstructor
  | TToken
  | TResetPasswordFeed;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = ThunkDispatch<RootState, never, TAppAction>;
