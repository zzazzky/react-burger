import { ThunkDispatch } from 'redux-thunk';
import rootReducer from '../services/reducers/rootReducer';
import { AnyAction } from 'redux';

export type ReduxState = ReturnType<typeof rootReducer>;
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;
