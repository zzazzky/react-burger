import { token, tokenInitialState } from '../../../services/reducers/token';
import {
  GET_TOKEN_FEED,
  GET_TOKEN_SUCCESS,
  GET_TOKEN_FAILED,
} from '../../../services/сonstants/actions';

const requestState = {
  ...tokenInitialState,
  isTokenRequest: true,
};

describe('token reducer', () => {
  it('should return the initial state', () => {
    expect(token(undefined, {})).toEqual(tokenInitialState);
  });

  it('should handle GET_TOKEN_FEED', () => {
    expect(
      token(tokenInitialState, {
        type: GET_TOKEN_FEED,
      })
    ).toEqual(requestState);
  });

  it('should handle GET_TOKEN_FAILED', () => {
    expect(
      token(requestState, {
        type: GET_TOKEN_FAILED,
      })
    ).toEqual({
      ...tokenInitialState,
      isTokenRequestFailed: true,
    });
  });

  it('should handle GET_TOKEN_SUCCESS', () => {
    expect(
      token(requestState, {
        type: GET_TOKEN_SUCCESS,
      })
    ).toEqual({
      ...tokenInitialState,
      isTokenRequestSuccess: true,
    });
  });
});
