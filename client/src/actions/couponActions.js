import axios from "axios";
import {
  COUPON_FAIL,
  COUPON_REQUEST,
  COUPON_SUCCESS,
} from "../types/couponTypes";

export const postCoupon = (id) => async (dispatch) => {
  try {
    dispatch({ type: COUPON_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `http://localhost:5000/api/coupon/${id}`,
      config
    );

    localStorage.setItem("Coupons", JSON.stringify(data));
    dispatch({ type: COUPON_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: COUPON_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
