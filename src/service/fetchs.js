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

      resolve({
        holidayTypes,
        filterTypes
      });
    }, 2000);
  });
};
