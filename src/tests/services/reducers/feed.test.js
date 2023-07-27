import feed from '../../../services/reducers/feed';
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

describe('feed reducer', () => {
  it('should return the initial state', () => {
    expect(feed(undefined, {})).toEqual({
      orders: null,
      wsConnected: false,
      wsError: true,
      total: null,
      totalToday: null,
      currentOrder: null,
    });
  });

  it('should handle FEED_WS_CONNECTION_START', () => {
    expect(
      feed(
        {
          orders: null,
          wsConnected: false,
          wsError: true,
          total: null,
          totalToday: null,
          currentOrder: null,
        },
        {
          type: FEED_WS_CONNECTION_START,
        }
      )
    ).toEqual({
      orders: null,
      wsConnected: false,
      wsError: true,
      total: null,
      totalToday: null,
      currentOrder: null,
    });
  });

  it('should handle FEED_WS_CLOSE_CONNECTION', () => {
    expect(
      feed(
        {
          orders: null,
          wsConnected: true,
          wsError: false,
          total: null,
          totalToday: null,
          currentOrder: null,
        },
        {
          type: FEED_WS_CLOSE_CONNECTION,
        }
      )
    ).toEqual({
      orders: null,
      wsConnected: true,
      wsError: false,
      total: null,
      totalToday: null,
      currentOrder: null,
    });
  });

  it('should handle FEED_WS_CONNECTION_SUCCESS', () => {
    expect(
      feed(
        {
          orders: null,
          wsConnected: false,
          wsError: true,
          total: null,
          totalToday: null,
          currentOrder: null,
        },
        {
          type: FEED_WS_CONNECTION_SUCCESS,
        }
      )
    ).toEqual({
      orders: null,
      wsConnected: true,
      wsError: false,
      total: null,
      totalToday: null,
      currentOrder: null,
    });
  });

  it('should handle FEED_WS_CONNECTION_ERROR', () => {
    expect(
      feed(
        {
          orders: null,
          wsConnected: true,
          wsError: false,
          total: null,
          totalToday: null,
          currentOrder: null,
        },
        {
          type: FEED_WS_CONNECTION_ERROR,
        }
      )
    ).toEqual({
      orders: null,
      wsConnected: false,
      wsError: true,
      total: null,
      totalToday: null,
      currentOrder: null,
    });
  });

  it('should handle FEED_WS_CONNECTION_CLOSED', () => {
    expect(
      feed(
        {
          orders: null,
          wsConnected: true,
          wsError: false,
          total: null,
          totalToday: null,
          currentOrder: null,
        },
        {
          type: FEED_WS_CONNECTION_CLOSED,
        }
      )
    ).toEqual({
      orders: null,
      wsConnected: false,
      wsError: true,
      total: null,
      totalToday: null,
      currentOrder: null,
    });
  });

  it('should handle FEED_WS_GET_MESSAGE', () => {
    expect(
      feed(
        {
          orders: null,
          wsConnected: true,
          wsError: false,
          total: null,
          totalToday: null,
          currentOrder: null,
        },
        {
          type: FEED_WS_GET_MESSAGE,
          payload: {
            orders: [
              {
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
              },
            ],
            total: 1,
            totalToday: 1,
          },
        }
      )
    ).toEqual({
      orders: [
        {
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
        },
      ],
      wsConnected: true,
      wsError: false,
      total: 1,
      totalToday: 1,
      currentOrder: null,
    });
  });

  it('should handle SET_CURRENT_ORDER', () => {
    expect(
      feed(
        {
          orders: null,
          wsConnected: true,
          wsError: false,
          total: null,
          totalToday: null,
          currentOrder: null,
        },
        {
          type: SET_CURRENT_ORDER,
          payload: {
            order: {
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
            },
          },
        }
      )
    ).toEqual({
      orders: null,
      wsConnected: true,
      wsError: false,
      total: null,
      totalToday: null,
      currentOrder: {
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
      },
    });
  });

  it('should handle DELETE_CURRENT_ORDER', () => {
    expect(
      feed(
        {
          orders: null,
          wsConnected: true,
          wsError: false,
          total: null,
          totalToday: null,
          currentOrder: {
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
          },
        },
        {
          type: DELETE_CURRENT_ORDER,
        }
      )
    ).toEqual({
      orders: null,
      wsConnected: true,
      wsError: false,
      total: null,
      totalToday: null,
      currentOrder: null,
    });
  });
});
