const orderInitialState = {
  currentOrder: {},
  orderRequest: false,
  orderFeedFailed: false,
};

const order = (state = orderInitialState, action) => {
  switch (action.type) {
    case 'GET_ORDER_FEED':
      return {
        ...state,
        orderRequest: true,
      };

    case 'GET_ORDER_FEED_FAILED':
      return {
        ...state,
        orderRequest: false,
        orderFeedFailed: true,
      };

    case 'GET_ORDER_FEED_SUCCESS':
      return {
        ...state,
        orderRequest: false,
        orderFeedFailed: false,
        currentOrder: {
          number: action.payload.number,
          name: action.payload.name,
        },
      };
    default:
      return state;
  }
};

export default order;
