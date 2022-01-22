import {
  COUPON_FAIL,
  COUPON_REQUEST,
  COUPON_SUCCESS,
} from "../types/couponTypes";

export const couponReducer = (
  state = { success: false, error: "" },
  action
) => {
  switch (action.type) {
    case COUPON_REQUEST:
      return { loading: true };
    case COUPON_SUCCESS:
      return { loading: false, success: true };
    case COUPON_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
