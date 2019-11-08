import { combineReducers } from "redux";

import staffMembers from "./staff-members";
import staffMember from "./staff-member";
import staffTypes from "./staff-types";
import payRates from "./pay-rates";
import venues from "./venues";
import genderValues from "./gender-values";
import holiday from "./holiday";
import holidayTypes from "./holiday-types";
import filterTypes from "./filter-types";

export default combineReducers({
  staffMembers,
  staffMember,
  payRates,
  staffTypes,
  venues,
  genderValues,
  holiday,
  holidayTypes,
  filterTypes
});
