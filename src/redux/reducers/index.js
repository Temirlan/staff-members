import { combineReducers } from "redux";

import staffMembers from "./staff-members";
import staffTypes from "./staff-types";
import venues from "./venues";

export default combineReducers({
  staffMembers,
  staffTypes,
  venues
});
