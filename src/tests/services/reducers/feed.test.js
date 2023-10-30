import { feed, feedInitialState } from '../../../services/reducers/feed';
import {
  FEED_WS_CONNECTION_START,
  FEED_WS_CONNECTION_SUCCESS,
  FEED_WS_CONNECTION_ERROR,
  FEED_WS_GET_MESSAGE,
  FEED_WS_CONNECTION_CLOSED,
  FEED_WS_CLOSE_CONNECTION,
  SET_CURRENT_ORDER,
  DELETE_CURRENT_ORDER,
} from '../../../services/сonstants/actions';

const connectedState = {
  ...feedInitialState,
  wsConnected: true,
  wsError: false,
};

const order = {
  ingredients: [
    '60d3463f7034a000269f45e7',
    '60d3463f7034a000269f45e9',
    '60d3463f7034a000269f45e8',
    '60d3463f7034a000269f45ea',
  ],
  _id: '',
  status: 'done',
  number: 0,
  createdAt: '2021-06-23T14:43:22.587Z',
  updatedAt: '2021-06-23T14:43:22.603Z',
};

const feedMessage = {
  orders: [order],
  total: 1,
  totalToday: 1,
};

describe('feed reducer', () => {
  it('should return the initial state', () => {
    expect(feed(undefined, {})).toEqual(feedInitialState);
  });

  it('should handle FEED_WS_CONNECTION_START', () => {
    expect(
      feed(feedInitialState, {
        type: FEED_WS_CONNECTION_START,
      })
    ).toEqual(feedInitialState);
  });

  it('should handle FEED_WS_CLOSE_CONNECTION', () => {
    expect(
      feed(connectedState, {
        type: FEED_WS_CLOSE_CONNECTION,
      })
    ).toEqual(connectedState);
  });

  it('should handle FEED_WS_CONNECTION_SUCCESS', () => {
    expect(
      feed(feedInitialState, {
        type: FEED_WS_CONNECTION_SUCCESS,
      })
    ).toEqual(connectedState);
  });

  it('should handle FEED_WS_CONNECTION_ERROR', () => {
    expect(
      feed(connectedState, {
        type: FEED_WS_CONNECTION_ERROR,
      })
    ).toEqual(feedInitialState);
  });

  it('should handle FEED_WS_CONNECTION_CLOSED', () => {
    expect(
      feed(connectedState, {
        type: FEED_WS_CONNECTION_CLOSED,
      })
    ).toEqual(feedInitialState);
  });

  it('should handle FEED_WS_GET_MESSAGE', () => {
    expect(
      feed(connectedState, {
        type: FEED_WS_GET_MESSAGE,
        payload: feedMessage,
      })
    ).toEqual({
      ...connectedState,
      ...feedMessage,
    });
  });

  it('should handle SET_CURRENT_ORDER', () => {
    expect(
      feed(connectedState, {
        type: SET_CURRENT_ORDER,
        payload: {
          order: order,
        },
      })
    ).toEqual({
      ...connectedState,
      currentOrder: order,
    });
  });

  it('should handle DELETE_CURRENT_ORDER', () => {
    expect(
      feed(
        {
          ...connectedState,
          currentOrder: order,
        },
        {
          type: DELETE_CURRENT_ORDER,
        }
      )
    ).toEqual(connectedState);
  });
});
