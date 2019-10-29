import { handleActions } from "redux-actions";

import * as types from "../types";

const inititalState = {
  optionMainVenue: "",
  optionStaffTypes: "",
  optionPayRates: ""
};

export default handleActions(
  {
    [types.SET_OPTION_MAIN_VENUE]: (state, action) => {
      return {
        ...state,
        optionMainVenue: action.payload
      };
    },
    [types.SET_OPTION_STAFF_TYPES]: (state, action) => {
      return {
        ...state,
        optionStaffTypes: action.payload
      };
    },
    [types.SET_OPTION_PAY_RATES]: (state, action) => {
      return {
        ...state,
        optionPayRates: action.payload
      };
    }
  },
  inititalState
);
