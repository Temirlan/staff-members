import { handleActions } from "redux-actions";

import * as types from "../types";

const inititalState = {
  venueOptions: [],
  staffTypeOptions: [],
  payRateOptions: []
};

export default handleActions(
  {
    [types.GET_OPTION]: (state, action) => {
      return {
        ...state,
        venueOptions: action.payload.venues.map(option => ({
          value: `${option.id}`,
          label: option.name
        })),
        staffTypeOptions: action.payload.staffTypes.map(option => ({
          value: `${option.id}`,
          label: option.name
        })),
        payRateOptions: action.payload.payRates.map(option => ({
          value: `${option.id}`,
          label: option.name
        }))
      };
    }
  },
  inititalState
);
