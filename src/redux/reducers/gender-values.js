import { handleActions } from "redux-actions";

import * as types from "../types";

const inititalState = [];

export default handleActions(
  {
    [types.INITIAL_LOAD]: (state, action) => {
      const genderValues =
        (action.payload.genderValues &&
          action.payload.genderValues.map((gender, index) => ({
            id: index + 1,
            name: gender
          }))) ||
        inititalState;
      return [...genderValues];
    }
  },
  inititalState
);
