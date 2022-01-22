import { DROPDOWN } from "../types/marginConstants";

export const dropdown = (bol) => {
  return {
    type: DROPDOWN,
    payload: bol,
  };
};
