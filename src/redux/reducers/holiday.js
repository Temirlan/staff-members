import { handleActions } from "redux-actions";

import * as types from "../types";
import moment from "moment";

const inititalState = {
  isOpenAddHolidayModal: false,
  holidays: [],
  holidaysCopy: []
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
    [types.FILTER_HOLIDAY_BY_DATE]: (state, action) => {
      const [filterStartDate, filterEndDate] = action.payload.rangeDate.split(
        " - "
      );
      return {
        ...state,
        holidays: state.holidaysCopy.filter(holiday => {
          const [startDate, endDate] = holiday.date.split(" - ");

          return (
            moment(filterStartDate).diff(moment(startDate)) <= 0 &&
            moment(endDate).diff(moment(filterEndDate)) <= 0
          );
        })
      };
    }
  },
  inititalState
);
