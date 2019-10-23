import * as axios from "axios";
import { createAction } from "redux-actions";
import * as types from "./types";
import { URL_API, AUTN_TOKEN } from "../config";

export const initialLoad = createAction(types.INITIAL_LOAD);

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
