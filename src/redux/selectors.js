import { createSelector } from "reselect";
import moment from "moment";

export const staffMembersSelector = state => state.staffMembers;
export const staffTypesSelector = state => state.staffTypes;
export const venuesSelector = state => state.venues;
export const genderValuesSelector = state => state.genderValues;
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

    const startsAt = moment(staffMember.startsAt, "DD-MM-YYYY").format(
      "ddd MM/DD/YYYY"
    );
    const createdAt = moment(staffMember.createdAt).format("ddd MM/DD/YYYY");

    let otherVenues = "";

    if (staffMember.otherVenueIds && staffMember.otherVenueIds.length > 0) {
      venues.forEach(venue => {
        const otherVenueId = staffMember.otherVenueIds.find(otherVenue => {
          return otherVenue === venue.id;
        });

        if (venue.id === otherVenueId) {
          otherVenues += venue.name + " ";
        }
      });
    }

    return {
      ...staffMember,
      fullName,
      startsAt,
      createdAt,
      otherVenues,
      staffType: staffTypes.find(
        staffType => staffType.id === staffMember.staffTypeId
      ),
      venue: venues.find(venue => venue.id === staffMember.masterVenueId),
      payRate: payRates.find(payRate => payRate.id === staffMember.payRateId)
    };
  }
);
