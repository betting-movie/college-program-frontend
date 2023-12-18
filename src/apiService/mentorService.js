import axios from "axios";

export const headers = {
  "Content-Type": "application/json",
};

const setAuthToken = () => {
  // const authToken = localStorage.getItem("token");
  // let authToken;
  // if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
  //   authToken = localStorage?.getItem("token");
  // }
  let authToken =
    typeof localStorage !== "undefined" ? localStorage?.getItem("token") : "";
  const newHeaders = { ...headers };

  if (authToken) {
    newHeaders["Authorization"] = `Bearer ${authToken}`;
  }

  return newHeaders;
};

axios.interceptors.request.use((config) => {
  config.headers = setAuthToken();
  return config;
});

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

export const mentorEdit = (payload) => {
  const mentorId = localStorage.getItem("mentorId");
  return axios.put(`api/v1/guide/update/${mentorId}`, payload);
};

// Corrected getMentorDetails function
export const getMentorDetails = (mentorId) => {
  return axios.get(`api/v1/guide/get-guide/${mentorId}`);
};

export const getAllMentors = () => {
  return axios.get(`/api/v1/guide/get-all-guide`);
};

export const mentorLogout = () => {
  localStorage.clear();
};
