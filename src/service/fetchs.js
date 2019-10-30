import * as axios from "axios";
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
