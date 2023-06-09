import { combineReducers } from 'redux';
import constructor from './constructor';
import order from './order';
import ingredients from './ingredients';
import profile from './profile';

export default combineReducers({
  ingredients,
  constructor,
  order,
  profile,
});
