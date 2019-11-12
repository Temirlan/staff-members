import * as axios from "axios";
import { FORM_ERROR } from "final-form";
import { URL_API, AUTN_TOKEN } from "../config";

export class HttpService {
  constructor() {
    this.instance = axios.create({
      baseURL: URL_API,
      headers: { Authorization: `Token token=${AUTN_TOKEN}` }
    });
  }

  getStaffMembers = () => {
    return this.instance.get("staff_members").then(response => response.data);
  };

  getStaffMemberById = idStaffMember => {
    return this.instance
      .get(`staff_members/${idStaffMember}`)
      .then(response => response.data);
  };
}

export const fetchDataRequest = () => {
  return new HttpService().getStaffMembers();
};

export const fetchProfileByIdRequest = idStaffMember => {
  return new HttpService().getStaffMemberById(idStaffMember);
};

export const updateContactDetailsRequest = values => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        !values.email ||
        !values.phoneNumber ||
        !values.address ||
        !values.postcode ||
        !values.country ||
        !values.county
      ) {
        resolve({
          email: !values.email
            ? [
                "This is a required field!",
                "It should be a correct email address!"
              ]
            : null,
          phoneNumber: !values.phoneNumber
            ? ["This is a required field!"]
            : null,
          address: !values.address ? ["This is a required field!"] : null,
          postcode: !values.postcode ? ["This is a required field!"] : null,
          country: !values.country ? ["This is a required field!"] : null,
          county: !values.county ? ["This is a required field!"] : null,
          [FORM_ERROR]: ["Something went wrong"],
          message: "Error",
          statusCode: 422
        });
      } else {
        resolve({ ...values, statusCode: 200 });
      }
    }, 1500);
  });
};

export const updatePersonalDetailsRequest = values => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!values.firstName || !values.surname || !values.gender) {
        resolve({
          firstName: !values.firstName ? ["This is a required field!"] : null,
          surname: !values.surname ? ["This is a required field!"] : null,
          gender: !values.gender ? ["This is a required field!"] : null,
          [FORM_ERROR]: ["Something went wrong"],
          message: "Error",
          statusCode: 422
        });
      } else {
        resolve({ ...values, statusCode: 200 });
      }
    }, 1500);
  });
};

export const updateEmploymentDeatailsRequest = values => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        !values.masterVenueId ||
        !values.staffTypeId ||
        !values.payRateId ||
        !values.hoursPreferenceNote ||
        !values.dayPreferenceNote ||
        !values.nationalInsuranceNumber ||
        !values.sageId
      ) {
        resolve({
          masterVenueId: !values.masterVenueId
            ? ["This is a required field!"]
            : null,
          staffTypeId: !values.staffTypeId
            ? ["This is a required field!"]
            : null,
          payRateId: !values.payRateId ? ["This is a required field!"] : null,
          hoursPreferenceNote: !values.hoursPreferenceNote
            ? ["This is a required field!"]
            : null,
          dayPreferenceNote: !values.dayPreferenceNote
            ? ["This is a required field!"]
            : null,
          nationalInsuranceNumber: !values.nationalInsuranceNumber
            ? ["This is a required field!"]
            : null,

          sageId: !values.sageId ? ["This is a required field!"] : null,
          [FORM_ERROR]: ["Something went wrong"],
          statusCode: 422
        });
      } else {
        resolve({ ...values, statusCode: 200 });
      }
    }, 1500);
  });
};

export const fetchHolidayDataRequest = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const holidayTypes = [
        {
          id: 1,
          name: "Paid Holiday"
        },
        {
          id: 2,
          name: "Unpaid Holiday"
        }
      ];

      const filterTypes = [
        {
          id: 1,
          name: "Date"
        },
        {
          id: 2,
          name: "Payslip Date"
        }
      ];
      const holidays = [
        {
          holidayTypeId: 2,
          status: "PENDING",
          startDate: "2016-11-15",
          endDate: "2016-11-16",
          note: null,
          creates: [
            {
              id: 1,
              status: "Requested",
              name: "John Doe",
              created: "2016-11-14T04:30:42+01:00"
            }
          ],
          payslipDate: "2016-11-20",
          frozen: false
        },
        {
          holidayTypeId: 1,
          status: null,
          startDate: "2016-11-17",
          endDate: "2016-11-18",
          note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          creates: [
            {
              id: 1,
              status: null,
              name: "Trulla Collier",
              created: "2016-11-14T04:30:42+01:00"
            }
          ],
          payslipDate: "2016-11-20",
          frozen: false
        },
        {
          holidayTypeId: 1,
          status: null,
          startDate: "2016-11-17",
          endDate: "2016-11-18",
          note: null,
          creates: [
            {
              id: 1,
              status: null,
              name: "Trulla Collier",
              created: "2016-11-14T04:30:42+01:00"
            }
          ],
          payslipDate: "2016-11-20",
          frozen: true
        },
        {
          holidayTypeId: 2,
          status: "ACCEPTED",
          startDate: "2016-11-15",
          endDate: "2016-11-16",
          note: null,
          creates: [
            {
              id: 1,
              status: "Requested",
              name: "John Doe",
              created: "2016-11-14T04:30:42+01:00"
            },
            {
              id: 2,
              status: "Accepted",
              name: "Trulla Collier",
              created: "2016-11-14T05:30:42+01:00"
            }
          ],
          payslipDate: "2016-11-20",
          frozen: false
        },
        {
          holidayTypeId: 2,
          status: "REJECTED",
          startDate: "2016-11-15",
          endDate: "2016-11-16",
          note: "Lorem ipsum dolor sit amet",
          creates: [
            {
              id: 1,
              status: "Requested",
              name: "John Doe",
              created: "2016-11-14T04:30:42+01:00"
            },
            {
              id: 2,
              status: "Rejected",
              name: "Trulla Collier",
              created: "2016-11-14T05:30:42+01:00"
            }
          ],
          payslipDate: "2016-11-20",
          frozen: true
        }
      ];

      resolve({
        holidayTypes,
        filterTypes,
        holidays
      });
    }, 2000);
  });
};
