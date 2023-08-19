import axios from "axios";

export const headers = {
  "Content-Type": "application/json",
};

const LeadService = (payload) => {
  headers.auth_token = process.env.NEXT_PUBLIC_TOKEN;

  const userDetails = {
    phone_number: payload?.mobile,
    firstName: payload?.name,
    state: payload?.state,
  };

  return axios.post("/api/v1/user/register", userDetails);
};

export default LeadService;
