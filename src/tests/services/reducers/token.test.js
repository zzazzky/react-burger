import token from '../../../services/reducers/token';
import {
  GET_TOKEN_FEED,
  GET_TOKEN_SUCCESS,
  GET_TOKEN_FAILED,
} from '../../../services/сonstants/actions';

describe('token reducer', () => {
  it('should return the initial state', () => {
    expect(token(undefined, {})).toEqual({
      isTokenRequest: false,
      isTokenRequestSuccess: false,
      isTokenRequestFailed: false,
    });
  });

  it('should handle GET_TOKEN_FEED', () => {
    expect(
      token(
        {
          isTokenRequest: false,
          isTokenRequestSuccess: false,
          isTokenRequestFailed: false,
        },
        {
          type: GET_TOKEN_FEED,
        }
      )
    ).toEqual({
      isTokenRequest: true,
      isTokenRequestSuccess: false,
      isTokenRequestFailed: false,
    });
  });

  it('should handle GET_TOKEN_FAILED', () => {
    expect(
      token(
        {
          isTokenRequest: true,
          isTokenRequestSuccess: false,
          isTokenRequestFailed: false,
        },
        {
          type: GET_TOKEN_FAILED,
        }
      )
    ).toEqual({
      isTokenRequest: false,
      isTokenRequestFailed: true,
      isTokenRequestSuccess: false,
    });
  });

  it('should handle GET_TOKEN_SUCCESS', () => {
    expect(
      token(
        {
          isTokenRequest: true,
          isTokenRequestSuccess: false,
          isTokenRequestFailed: false,
        },
        {
          type: GET_TOKEN_SUCCESS,
        }
      )
    ).toEqual({
      isTokenRequest: false,
      isTokenRequestFailed: false,
      isTokenRequestSuccess: true,
    });
  });
});
