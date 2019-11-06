import { handleActions } from "redux-actions";

import * as types from "../types";

const inititalState = {
  isOpenAddHolidayModal: false
};

export default handleActions(
  {
    [types.TOGGLE_ADD_HOLIDAY_MODAL]: (state, action) => {
      return {
        ...state,
        isOpenAddHolidayModal: !state.isOpenAddHolidayModal
      };
    }
  },
  inititalState
);
