import { combineReducers } from 'redux';
import constructor from './constructor';
import order from './order';
import ingredients from './ingredients';
import profile from './profile';
import resetPassword from './reset-password';
import token from './token';

export default combineReducers({
  ingredients,
  constructor,
  order,
  profile,
  resetPassword,
  token,
});
