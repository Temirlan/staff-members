import { createAction } from "redux-actions";
import * as types from "./types";
import * as f from "../service/fetchs";
import moment from "moment";

export const initialLoad = createAction(types.INITIAL_LOAD);

export const setOptionMainVenue = createAction(types.SET_OPTION_MAIN_VENUE);
export const setOptionStaffType = createAction(types.SET_OPTION_STAFF_TYPES);
export const setOptionPayRate = createAction(types.SET_OPTION_PAY_RATES);
export const getOptions = createAction(types.GET_OPTION);
export const editDetails = createAction(types.EDIT_STAFF_MEMBER_DETAILS);
export const filterHolidaysByDate = createAction(types.FILTER_HOLIDAY_BY_DATE);
export const filterParamsDate = createAction(types.FILTER_PARAMS_DATE);

export const toggleAddHolidayModal = createAction(
  types.TOGGLE_ADD_HOLIDAY_MODAL
);

export const errorEditEmploymentDetails = createAction(
  types.ERROR_EDIT_EMPLOYMENT_DETAILS
);

/**
 * 1. Create httpService, should return axios instance
 * 2. Add forms handleSubmit(Promises), and update store with new data
 * 3. Move http calls and handleSubmit to separate function calls(like updateEmploymentDetailsRequest)
 */
export const fetchData = () => dispatch => {
  return f.fetchDataRequest().then(data => {
    dispatch(initialLoad(data));
  });
};

export const updateEmploymentDeatails = values => (dispatch, getState) => {
  return f.updateEmploymentDeatailsRequest(values).then(values => {
    if (values.statusCode === 422) {
      return values;
    }

    if (values.statusCode === 200) {
      dispatch(
        editDetails({
          ...values,
          startsAt: moment(values.startsAt, "DD-MM-YYYY").format("DD-MM-YYYY")
        })
      );
    }
  });
};

export const updatePersonalDetails = values => (dispatch, getState) => {
  return f.updatePersonalDetailsRequest(values).then(values => {
    if (values.statusCode === 422) {
      return values;
    }

    if (values.statusCode === 200) {
      const gender = values.gender === 1 ? "male" : "female";

      dispatch(editDetails({ ...values, gender }));
    }
  });
};

export const updateContactDetails = values => (dispatch, getState) => {
  return f.updateContactDetailsRequest(values).then(values => {
    if (values.statusCode === 422) {
      return values;
    }

    if (values.statusCode === 200) {
      dispatch(editDetails(values));
    }
  });
};

export const fetchProfileById = idStaffMember => dispatch => {
  return f.fetchProfileByIdRequest(idStaffMember).then(data => {
    dispatch(initialLoad(data));
  });
};

export const fetchHolidayData = () => dispatch => {
  return f.fetchHolidayDataRequest().then(data => {
    dispatch(initialLoad(data));
  });
};
