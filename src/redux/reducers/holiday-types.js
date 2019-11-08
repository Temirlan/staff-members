import { handleActions } from "redux-actions";

import * as types from "../types";

const inititalState = [];

export default handleActions(
  {
    [types.INITIAL_LOAD]: (state, action) => {
      const holidayTypes = action.payload.holidayTypes || inititalState;
      return [...holidayTypes];
    }
  },
  inititalState
);
