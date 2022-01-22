import { RESPONSIVE_MARGIN } from "../types/marginConstants";

export const margin = (spacing) => {
  return {
    type: RESPONSIVE_MARGIN,
    payload: spacing,
  };
};
