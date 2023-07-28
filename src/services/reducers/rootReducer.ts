import { combineReducers } from 'redux';
import { constructor } from './constructor';
import { newOrder } from './newOrder';
import { ingredients } from './ingredients';
import { profile } from './profile';
import { resetPassword } from './reset-password';
import { token } from './token';
import { feed } from './feed';

export default combineReducers({
  ingredients,
  constructor,
  newOrder,
  profile,
  resetPassword,
  token,
  feed,
});
