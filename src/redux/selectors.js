import { createSelector } from "reselect";

export const staffMembersSelector = state => state.staffMembers;
export const staffTypesSelector = state => state.staffTypes;
export const venuesSelector = state => state.venues;

export const getStaffMembers = createSelector(
  [staffMembersSelector, staffTypesSelector, venuesSelector],
  (staffMembers, staffTypes, venues) => {
    return staffMembers.map(staffMember => {
      return {
        ...staffMember,
        fullName: `${staffMember.firstName} ${staffMember.surname}`,
        staffType: staffTypes.find(
          staffType => staffType.id === staffMember.staffTypeId
        ),
        venue: venues.find(venue => venue.id === staffMember.masterVenueId)
      };
    });
  }
);
