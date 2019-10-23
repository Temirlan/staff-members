import { combineReducers } from "redux";

import staffMembers from "./staff-members";
import staffMember from "./staff-member";
import staffTypes from "./staff-types";
import payRates from "./pay-rates";
import venues from "./venues";

export default combineReducers({
  staffMembers,
  staffMember,
  payRates,
  staffTypes,
  venues
});
