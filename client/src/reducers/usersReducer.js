import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGOUT,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_FETCH_REQUEST,
  USER_FETCH_SUCCESS,
  USER_FETCH_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  USER_EDIT_REQUEST,
  USER_EDIT_SUCCESS,
  USER_EDIT_FAIL,
} from "../types/userTypes";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userListReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { loading: true };
    case USER_LIST_SUCCESS:
      return { loading: false, users: action.payload };
    case USER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userFetchReducer = (state = { user: [] }, action) => {
  switch (action.type) {
    case USER_FETCH_REQUEST:
      return { loading: true, ...state };
    case USER_FETCH_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_FETCH_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DELETE_REQUEST:
      return { loading: true };
    case USER_DELETE_SUCCESS:
      return { loading: false, success: true };
    case USER_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userEditReducer = (state = { user: [] }, action) => {
  switch (action.type) {
    case USER_EDIT_REQUEST:
      return { loading: true, ...state };
    case USER_EDIT_SUCCESS:
      return { loading: false, success: true, user: action.payload };
    case USER_EDIT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
