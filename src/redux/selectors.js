import { createSelector } from "reselect";

export const staffMembersSelector = state => state.staffMembers;
export const staffTypesSelector = state => state.staffTypes;
export const venuesSelector = state => state.venues;
export const staffMemberSelector = state => state.staffMember;
export const payRatesSelector = state => state.payRates;

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

export const getStaffMember = createSelector(
  [staffMemberSelector, staffTypesSelector, venuesSelector, payRatesSelector],
  (staffMember, staffTypes, venues, payRates) => {
    const fullName =
      staffMember.firstName && staffMember.surname
        ? `${staffMember.firstName} ${staffMember.surname}`
        : "";

    return {
      ...staffMember,
      fullName,
      staffType: staffTypes.find(
        staffType => staffType.id === staffMember.staffTypeId
      ),
      venue: venues.find(venue => venue.id === staffMember.masterVenueId),
      payRate: payRates.find(payRate => payRate.id === staffMember.payRateId)
    };
  }
);
