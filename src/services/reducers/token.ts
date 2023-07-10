import {
  GET_TOKEN_FEED,
  GET_TOKEN_SUCCESS,
  GET_TOKEN_FAILED,
} from '../сonstants/actions';
import { TToken } from '../actions/token';
import { ITokenState } from '../../types/store-interface';

const tokenInitialState: ITokenState = {
  isTokenRequest: false,
  isTokenRequestSuccess: false,
  isTokenRequestFailed: false,
};

const token = (state = tokenInitialState, action: TToken): ITokenState => {
  switch (action.type) {
    case GET_TOKEN_FEED:
      return {
        ...state,
        isTokenRequest: true,
        isTokenRequestSuccess: false,
        isTokenRequestFailed: false,
      };

    case GET_TOKEN_FAILED:
      return {
        ...state,
        isTokenRequest: false,
        isTokenRequestFailed: true,
        isTokenRequestSuccess: false,
      };

    case GET_TOKEN_SUCCESS:
      return {
        ...state,
        isTokenRequest: false,
        isTokenRequestFailed: false,
        isTokenRequestSuccess: true,
      };
    default:
      return state;
  }
};

export default token;
