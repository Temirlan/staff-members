import { handleActions } from "redux-actions";

import * as types from "../types";

const inititalState = [];

export default handleActions(
  {
    [types.INITIAL_LOAD]: (state, action) => {
      const genderValues = action.payload.genderValues || inititalState;
      return [...genderValues];
    }
  },
  inititalState
);
