import { RESPONSIVE_MARGIN } from "../types/marginConstants";

export const marginReducer = (state = {}, action) => {
  switch (action.type) {
    case RESPONSIVE_MARGIN:
      return { margin: action.payload };
    default:
      return state;
  }
};
