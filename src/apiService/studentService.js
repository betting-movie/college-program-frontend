import axios from "axios";

export const headers = {
  "Content-Type": "application/json",
};

const setAuthToken = () => {
  const authToken = localStorage.getItem("token");
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

export const studentSignup = (payload) => {
  headers.auth_token = process.env.NEXT_PUBLIC_TOKEN;

  const studentDetails = {
    name: "",
    email: payload?.email,
    phone_number: payload?.mobile,
    password: payload?.password,
  };

  return axios.post("/api/v1/student/register", studentDetails);
};

export const studentLogin = (payload) => {
  headers.auth_token = process.env.NEXT_PUBLIC_TOKEN;

  const mentorDetails = {
    email: payload?.email,
    password: payload?.password,
  };

  return axios.post("/api/v1/student/login", mentorDetails);
};
