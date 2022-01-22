import { DROPDOWN } from "../types/marginConstants";

export const dropReducer = (state = { hide: true }, action) => {
  switch (action.type) {
    case DROPDOWN:
      return { hide: action.payload };
    default:
      return state;
  }
};
