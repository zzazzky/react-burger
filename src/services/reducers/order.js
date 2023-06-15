const orderInitialState = {
  currentOrder: null,
  orderRequest: false,
  orderFeedFailed: false,
  orderFeedSuccess: false,
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
        orderFeedSuccess: false,
      };

    case 'GET_ORDER_FEED_SUCCESS':
      return {
        ...state,
        orderRequest: false,
        orderFeedFailed: false,
        orderFeedSuccess: true,
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
