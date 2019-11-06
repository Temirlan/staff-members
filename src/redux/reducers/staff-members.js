import { handleActions } from "redux-actions";

import * as types from "../types";

const inititalState = [];

export default handleActions(
  {
    [types.INITIAL_LOAD]: (state, action) => {
      const staffMembers = action.payload.staffMembers || inititalState;
      return [...staffMembers];
    }
  },
  inititalState
);
