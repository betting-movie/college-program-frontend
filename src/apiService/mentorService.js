import axios from "axios";

export const headers = {
  "Content-Type": "application/json",
};

export const mentorSignup = (payload) => {
  headers.auth_token = process.env.NEXT_PUBLIC_TOKEN;

  const mentorDetails = {
    name: "",
    email: payload?.email,
    phone_number: payload?.mobile,
    password: payload?.password,
  };

  return axios.post("/api/v1/guide/register", mentorDetails);
};

export const mentorLogin = (payload) => {
  headers.auth_token = process.env.NEXT_PUBLIC_TOKEN;

  const mentorDetails = {
    email: payload?.email,
    password: payload?.password,
  };

  return axios.post("/api/v1/guide/login", mentorDetails);
};

export const getMentor = () => {
  const mentorId = localStorage.getItem("mentorId");
  return axios.get(`api/v1/guide/get-guide/${mentorId}`);
};

export const mentorEdit = (payload) => {
  headers.auth_token = process.env.NEXT_PUBLIC_TOKEN;

  const mentorId = localStorage.getItem("mentorId");
  return axios.put(`api/v1/guide/update/${mentorId}`, payload);
};
