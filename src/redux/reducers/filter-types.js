import { handleActions } from "redux-actions";

import * as types from "../types";

const inititalState = [];

export default handleActions(
  {
    [types.INITIAL_LOAD]: (state, action) => {
      const filterTypes = action.payload.filterTypes || inititalState;
      return [...filterTypes];
    }
  },
  inititalState
);
