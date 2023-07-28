import {
  newOrder,
  newOrderInitialState,
} from '../../../services/reducers/newOrder';
import {
  GET_ORDER_FEED,
  GET_ORDER_FEED_FAILED,
  GET_ORDER_FEED_SUCCESS,
} from '../../../services/сonstants/actions';

const requestState = {
  ...newOrderInitialState,
  orderRequest: true,
};

const testUserInfo = {
  number: 1111,
  name: 'test',
};

describe('newOrder reducer', () => {
  it('should return the initial state', () => {
    expect(newOrder(undefined, {})).toEqual(newOrderInitialState);
  });

  it('should handle GET_ORDER_FEED', () => {
    expect(
      newOrder(newOrderInitialState, {
        type: GET_ORDER_FEED,
      })
    ).toEqual(requestState);
  });

  it('should handle GET_ORDER_FEED_FAILED', () => {
    expect(
      newOrder(requestState, {
        type: GET_ORDER_FEED_FAILED,
      })
    ).toEqual({
      ...newOrderInitialState,
      orderFeedFailed: true,
    });
  });

  it('should handle GET_ORDER_FEED_SUCCESS', () => {
    expect(
      newOrder(requestState, {
        type: GET_ORDER_FEED_SUCCESS,
        payload: testUserInfo,
      })
    ).toEqual({
      ...newOrderInitialState,
      info: testUserInfo,
      orderFeedSuccess: true,
    });
  });
});
