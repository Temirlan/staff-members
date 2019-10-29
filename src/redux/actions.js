import * as axios from "axios";
import { createAction } from "redux-actions";
import * as types from "./types";
import { URL_API, AUTN_TOKEN } from "../config";

export const initialLoad = createAction(types.INITIAL_LOAD);

export const setOptionMainVenue = createAction(types.SET_OPTION_MAIN_VENUE);
export const setOptionStaffType = createAction(types.SET_OPTION_STAFF_TYPES);
export const setOptionPayRate = createAction(types.SET_OPTION_PAY_RATES);

export const fetchData = () => {
  return dispatch => {
    return axios
      .get(URL_API, {
        headers: {
          Authorization: `Token token=${AUTN_TOKEN}`
        }
      })
      .then(response => {
        dispatch(initialLoad(response.data));
      });
  };
};

export const fetchProfileById = idStaffMember => {
  return dispatch => {
    return axios
      .get(`${URL_API}/${idStaffMember}`, {
        headers: {
          Authorization: `Token token=${AUTN_TOKEN}`
        }
      })
      .then(response => {
        dispatch(initialLoad(response.data));
      });
  };
};
