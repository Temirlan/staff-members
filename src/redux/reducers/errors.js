import { handleActions } from "redux-actions";

import * as types from "../types";

const inititalState = {
  employmentDetails: {}
};

export default handleActions(
  {
    [types.ERROR_EDIT_EMPLOYMENT_DETAILS]: (state, action) => {
      return {
        ...state,
        employmentDetails: {
          statusCode: action.payload
        }
      };
    }
  },
  inititalState
);
