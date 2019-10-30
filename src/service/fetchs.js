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
    return this.instance.get("staff_members");
  };

  getStaffMemberById = idStaffMember => {
    return this.instance.get(`staff_members/${idStaffMember}`);
  };
}

export const fetchDataRequest = () => {
  return new HttpService().getStaffMembers();
};

export const fetchProfileByIdRequest = idStaffMember => {
  return new HttpService().getStaffMemberById(idStaffMember);
};

export const updateEmploymentDeatailsRequest = values => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        !values.masterVenueId ||
        !values.otherVenueIds ||
        !values.staffTypeId ||
        !values.startsAt ||
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
          otherVenueIds: !values.otherVenueIds
            ? ["This is a required field!"]
            : null,
          staffTypeId: !values.staffTypeId
            ? ["This is a required field!"]
            : null,
          startsAt: !values.startsAt ? ["This is a required field!"] : null,
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
          message: "Error",
          statusCode: 400
        });
      } else {
        resolve({ ...values, statusCode: 200 });
      }
    }, 1500);
  });
};
