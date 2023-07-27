import newOrder from '../../../services/reducers/newOrder';
import {
  GET_ORDER_FEED,
  GET_ORDER_FEED_FAILED,
  GET_ORDER_FEED_SUCCESS,
} from '../../../services/сonstants/actions';

describe('newOrder reducer', () => {
  it('should return the initial state', () => {
    expect(newOrder(undefined, {})).toEqual({
      info: null,
      orderRequest: false,
      orderFeedFailed: false,
      orderFeedSuccess: false,
    });
  });

  it('should handle GET_ORDER_FEED', () => {
    expect(
      newOrder(
        {
          info: null,
          orderRequest: false,
          orderFeedFailed: false,
          orderFeedSuccess: false,
        },
        {
          type: GET_ORDER_FEED,
        }
      )
    ).toEqual({
      info: null,
      orderRequest: true,
      orderFeedFailed: false,
      orderFeedSuccess: false,
    });
  });

  it('should handle GET_ORDER_FEED_FAILED', () => {
    expect(
      newOrder(
        {
          info: null,
          orderRequest: true,
          orderFeedFailed: false,
          orderFeedSuccess: false,
        },
        {
          type: GET_ORDER_FEED_FAILED,
        }
      )
    ).toEqual({
      info: null,
      orderRequest: false,
      orderFeedFailed: true,
      orderFeedSuccess: false,
    });
  });

  it('should handle GET_ORDER_FEED_SUCCESS', () => {
    expect(
      newOrder(
        {
          info: null,
          orderRequest: true,
          orderFeedFailed: false,
          orderFeedSuccess: false,
        },
        {
          type: GET_ORDER_FEED_SUCCESS,
          payload: {
            number: 1111,
            name: 'test',
          },
        }
      )
    ).toEqual({
      info: {
        number: 1111,
        name: 'test',
      },
      orderRequest: false,
      orderFeedFailed: false,
      orderFeedSuccess: true,
    });
  });
});
