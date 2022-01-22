import {
  MY_ORDER_FAIL,
  MY_ORDER_LIST_FAIL,
  MY_ORDER_LIST_REQUEST,
  MY_ORDER_LIST_RESET,
  MY_ORDER_LIST_SUCCESS,
  MY_ORDER_REQUEST,
  MY_ORDER_RESET,
  MY_ORDER_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_DELIVER_REQUEST,
  ORDER_DELIVER_SUCCESS,
  ORDER_DELIVER_FAIL,
  ORDER_CANCEL_FAIL,
  ORDER_CANCEL_REQUEST,
  ORDER_CANCEL_SUCCESS,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAIL,
} from "../types/orderTypes";

export const orderCreateReducers = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return { loading: true };

    case ORDER_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      };
    case ORDER_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const myOrderListReducer = (state = {}, action) => {
  switch (action.type) {
    case MY_ORDER_LIST_REQUEST:
      return { loading: true };

    case MY_ORDER_LIST_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };
    case MY_ORDER_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case MY_ORDER_LIST_RESET:
      return {
        order: [],
      };
    default:
      return state;
  }
};

export const myOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case MY_ORDER_REQUEST:
      return { loading: true };

    case MY_ORDER_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };
    case MY_ORDER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case MY_ORDER_RESET:
      return {
        order: [],
      };
    default:
      return state;
  }
};

export const listOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_LIST_REQUEST:
      return { loading: true };

    case ORDER_LIST_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };
    case ORDER_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    // case ORDER:
    //   return {
    //     order: [],
    //   };
    default:
      return state;
  }
};

export const orderPayReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_PAY_REQUEST:
      return { loading: true };

    case ORDER_PAY_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      };
    case ORDER_PAY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const orderDeliverReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_DELIVER_REQUEST:
      return { loading: true };

    case ORDER_DELIVER_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      };
    case ORDER_DELIVER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const orderCancelReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CANCEL_FAIL:
      return { loading: true };

    case ORDER_CANCEL_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      };
    case ORDER_CANCEL_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
