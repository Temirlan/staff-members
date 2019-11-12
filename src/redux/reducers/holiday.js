import { handleActions } from "redux-actions";

import * as types from "../types";

const inititalState = {
  isOpenAddHolidayModal: false,
  holidays: [],
  holidaysCopy: [],
  filterStartDate: null,
  filterEndDate: null
};

export default handleActions(
  {
    [types.INITIAL_LOAD]: (state, action) => {
      const holidays = action.payload.holidays || [];
      return {
        ...state,
        holidays,
        holidaysCopy: holidays
      };
    },
    [types.TOGGLE_ADD_HOLIDAY_MODAL]: (state, action) => {
      return {
        ...state,
        isOpenAddHolidayModal: !state.isOpenAddHolidayModal
      };
    },
    [types.FILTER_PARAMS_DATE]: (state, action) => {
      if (action.payload.rangeDate) {
        const { startDate, endDate } = action.payload.rangeDate;

        return {
          ...state,
          filterStartDate: startDate,
          filterEndDate: endDate
        };
      }

      return {
        ...state,
        filterStartDate: null,
        filterEndDate: null
      };
    }
  },
  inititalState
);
