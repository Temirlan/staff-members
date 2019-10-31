import { handleActions } from "redux-actions";

import * as types from "../types";

const inititalState = {};

export default handleActions(
  {
    [types.INITIAL_LOAD]: (state, action) => {
      const staffMember = action.payload.staffMember || inititalState;
      return {
        ...staffMember
      };
    },
    [types.EDIT_STAFF_MEMBER_DETAILS]: (state, action) => {
      return {
        ...state,
        ...action.payload
      };
    }
  },
  inititalState
);
