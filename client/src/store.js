import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  userLoginReducer,
  userRegisterReducer,
  userListReducer,
  userDeleteReducer,
  userEditReducer,
  userFetchReducer,
} from "./reducers/usersReducer";

import {
  productListReducer,
  productDetailsReducer,
  productCreateReducer,
  productDeleteReducer,
  productEditReducer,
  productReviewCreateReducer,
} from "./reducers/productsReducer";

import {
  orderCreateReducers,
  myOrderListReducer,
  myOrderReducer,
  listOrderReducer,
  orderPayReducer,
  orderDeliverReducer,
  orderCancelReducer,
} from "./reducers/orderReducer";
import { marginReducer } from "./reducers/marginReducer";
import { dropReducer } from "./reducers/dropdownReducer";

import { cartReducer } from "./reducers/cartsReducer";
import { couponReducer } from "./reducers/couponReducer";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productCreate: productCreateReducer,
  productDelete: productDeleteReducer,
  productEdit: productEditReducer,
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  sideMargin: marginReducer,
  userList: userListReducer,
  userFetch: userFetchReducer,
  userDelete: userDeleteReducer,
  userEdit: userEditReducer,
  cart: cartReducer,
  orderCreate: orderCreateReducers,
  myOrderList: myOrderListReducer,
  myOrder: myOrderReducer,
  listOrders: listOrderReducer,
  orderPay: orderPayReducer,
  orderDeliver: orderDeliverReducer,
  orderCancel: orderCancelReducer,
  coupons: couponReducer,
  productReviewCreate: productReviewCreateReducer,
  drop: dropReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const cartInfoFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const shippingInfoFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};
const paymentInfoFromStorage = localStorage.getItem("paymentMethod")
  ? JSON.parse(localStorage.getItem("paymentMethod"))
  : null;

const couponInfoFromStorage = localStorage.getItem("Coupons")
  ? JSON.parse(localStorage.getItem("Coupons"))
  : { success: false };
const initialValue = {
  cart: {
    cartItems: cartInfoFromStorage,
    shippingAddress: shippingInfoFromStorage,
    paymentMethod: paymentInfoFromStorage,
  },
  userLogin: {
    userInfo: userInfoFromStorage,
  },
  coupons: couponInfoFromStorage,
};

const store = createStore(
  reducer,
  initialValue,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
