import { handleActions } from "redux-actions";

import * as types from "../types";

const inititalState = {
  isOpenAddHolidayModal: false,
  holidays: []
};

export default handleActions(
  {
    [types.INITIAL_LOAD]: (state, action) => {
      const holidays = action.payload.holidays || [];
      return {
        ...state,
        holidays
      };
    },
    [types.TOGGLE_ADD_HOLIDAY_MODAL]: (state, action) => {
      return {
        ...state,
        isOpenAddHolidayModal: !state.isOpenAddHolidayModal
      };
    }
  },
  inititalState
);
