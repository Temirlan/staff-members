import { createSelector } from "reselect";
import moment from "moment";

export const staffMembersSelector = state => state.staffMembers;
export const staffTypesSelector = state => state.staffTypes;
export const venuesSelector = state => state.venues;
export const genderValuesSelector = state => state.genderValues;
export const staffMemberSelector = state => state.staffMember;
export const payRatesSelector = state => state.payRates;
export const holidayTypesSelector = state => state.holidayTypes;
export const holidaysSelector = state => state.holiday.holidays;
export const holidaySelector = state => state.holiday;

const formatDateUI = "ddd DD/MM/YYYY";
const formatPayslipDateUI = "DD/MM/YYYY";
const formatCreatedDateUI = "HH:mm ddd DD/MM/YYYY";

export const getHolidays = createSelector(
  [holidaySelector, holidayTypesSelector, holidaysSelector],
  (holiday, holidayTypes, holidays) => {
    const holidayEntity = (holiday, holidayTypes) => {
      const { startDate, endDate, payslipDate } = holiday;

      const date = `${moment(startDate).format(formatDateUI)} - ${moment(
        endDate
      ).format(formatDateUI)}`;

      const mPayslipDate = moment(payslipDate).format(formatPayslipDateUI);

      const creates = holiday.creates.map(create => {
        return {
          ...create,
          created: moment(create.created).format(formatCreatedDateUI)
        };
      });

      return {
        ...holiday,
        date,
        payslipDate: mPayslipDate,
        holidayType: holidayTypes.find(
          holidayType => holidayType.id === holiday.holidayTypeId
        ),
        creates
      };
    };

    if (holiday.filterStartDate && holiday.filterEndDate) {
      const filterHolidays = holidays.filter(h => {
        const { startDate, endDate } = h;

        return (
          moment(holiday.filterStartDate).diff(moment(startDate)) <= 0 &&
          moment(endDate).diff(moment(holiday.filterEndDate)) <= 0
        );
      });

      return filterHolidays.map(holiday =>
        holidayEntity(holiday, holidayTypes)
      );
    }

    return holidays.map(holiday => holidayEntity(holiday, holidayTypes));
  }
);

export const getGenderValues = createSelector(
  [genderValuesSelector],
  genderValues => {
    return genderValues.map((gender, index) => ({
      id: index + 1,
      name: gender
    }));
  }
);

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

    // const startsAt = moment(staffMember.startsAt, "DD-MM-YYYY").format(
    //   "ddd MM/DD/YYYY"
    // );
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
