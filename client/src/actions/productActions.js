import {
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_RESET,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_LIST_SUCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCESS,
  PRODUCT_EDIT_FAIL,
  PRODUCT_EDIT_REQUEST,
  PRODUCT_EDIT_SUCCESS,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCESS,
  PRODUCT_CREATE_REVIEW_FAIL,
} from "../types/productTypes.js";
import axios from "axios";

export const getProducts =
  (keyword = "", category = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: GET_PRODUCTS_REQUEST });
      ///api/user/
      const { data } = await axios.get(
        `/api/products?keyword=${keyword}`
      );

      if (category) {
        category = category.charAt(0).toUpperCase() + category.slice(1);
        console.log(category);
        const { data } = await axios.get(
          `/api/products/search?category=${category}`
        );
        console.log(data);
        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
        return;
      }

      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: GET_PRODUCTS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_REQUEST });

    const { data } = await axios.get(
      `/api/products/${id}`
    );

    dispatch({ type: GET_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createProduct =
  (
    name,
    brandImage,
    image,
    brand,
    price,
    category,
    description,
    countInStock
  ) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: PRODUCT_CREATE_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      // console.log(
      //   name,
      //   brandImage,
      //   image,
      //   brand,
      //   price,
      //   category,
      //   description,
      //   countInStock
      // );
      const { data } = await axios.post(
        "/api/products",
        {
          name,
          brandImage,
          image,
          price,
          brand,
          category,
          description,
          countInStock,
        },
        config
      );

      dispatch({ type: PRODUCT_CREATE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: PRODUCT_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_DELETE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    console.log(id);
    await axios.delete(`/api/products/${id}`, config);

    dispatch({ type: PRODUCT_DELETE_SUCESS });
  } catch (error) {
    dispatch({
      type: PRODUCT_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProduct =
  (keyword = "", pageNumber = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_LIST_REQUEST });

      const { data } = await axios.get(
        `/api/products?keyword=${keyword}&pageNumber=${pageNumber}`
      );

      dispatch({ type: PRODUCT_LIST_SUCESS, payload: data });
    } catch (error) {
      dispatch({
        type: PRODUCT_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const editProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_EDIT_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const token = userInfo.token;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.put(
      `/api/products/${product._id}`,
      product,
      config
    );
    console.log(data);

    dispatch({ type: PRODUCT_EDIT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_EDIT_FAIL,
      error:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createProductReview =
  (productId, review) => async (dispatch, getState) => {
    try {
      dispatch({ type: PRODUCT_CREATE_REVIEW_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      await axios.post(`/api/products/${productId}/reviews`, review, config);

      dispatch({ type: PRODUCT_CREATE_REVIEW_SUCESS });
    } catch (error) {
      dispatch({
        type: PRODUCT_CREATE_REVIEW_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };