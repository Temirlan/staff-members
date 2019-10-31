import { createAction } from "redux-actions";
import * as types from "./types";
import {
  fetchDataRequest,
  fetchProfileByIdRequest,
  updateEmploymentDeatailsRequest,
  updatePersonalDetailsRequest,
  updateContactDetailsRequest
} from "../service/fetchs";

export const initialLoad = createAction(types.INITIAL_LOAD);

export const setOptionMainVenue = createAction(types.SET_OPTION_MAIN_VENUE);
export const setOptionStaffType = createAction(types.SET_OPTION_STAFF_TYPES);
export const setOptionPayRate = createAction(types.SET_OPTION_PAY_RATES);
export const getOptions = createAction(types.GET_OPTION);
export const editDetails = createAction(types.EDIT_STAFF_MEMBER_DETAILS);

/**
 * 1. Create httpService, should return axios instance
 * 2. Add forms handleSubmit(Promises), and update store with new data
 * 3. Move http calls and handleSubmit to separate function calls(like updateEmploymentDetailsRequest)
 */
export const fetchData = () => dispatch => {
  return fetchDataRequest().then(response => {
    dispatch(initialLoad(response.data));
  });
};

export const updateEmploymentDeatails = values => (dispatch, getState) => {
  return updateEmploymentDeatailsRequest(values).then(values => {
    if (values.statusCode === 400) {
      return values;
    }

    if (values.statusCode === 200) {
      dispatch(editDetails(values));
      return values;
    }
  });
};

export const updatePersonalDetails = values => (dispatch, getState) => {
  return updatePersonalDetailsRequest(values).then(values => {
    if (values.statusCode === 400) {
      return values;
    }

    if (values.statusCode === 200) {
      const gender = values.gender === 1 ? "male" : "female";

      dispatch(editDetails({ ...values, gender }));
      return values;
    }
  });
};

export const updateContactDetails = values => (dispatch, getState) => {
  return updateContactDetailsRequest(values).then(values => {
    if (values.statusCode === 400) {
      return values;
    }

    if (values.statusCode === 200) {
      dispatch(editDetails(values));
      return values;
    }
  });
};

export const fetchProfileById = idStaffMember => dispatch => {
  return fetchProfileByIdRequest(idStaffMember).then(response => {
    dispatch(initialLoad(response.data));
  });
};
