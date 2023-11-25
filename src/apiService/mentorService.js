import axios from "axios";

export const headers = {
  "Content-Type": "application/json",
};

// const setAuthToken = () => {
//   const authToken = localStorage.getItem("token");
//   console.log("TTT", authToken);
//   if (authToken) {
//     headers["Authorization"] = `Bearer ${authToken}`;
//   } else {
//     delete headers["Authorization"];
//   }
// };

// Interceptor to set the token before each request
// axios.interceptors.request.use((config) => {
//   setAuthToken();
//   return config;
// });

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
  console.log("Headers", headers);
  const mentorId = localStorage.getItem("mentorId");
  return axios.get(`api/v1/guide/get-guide/${mentorId}`);
};

export const mentorEdit = (payload) => {
  const mentorId = localStorage.getItem("mentorId");
  return axios.put(`api/v1/guide/update/${mentorId}`, payload);
};

// This can be combined with above api
export const getMentorDetails = (mentorId) => {
  return axios.get(`api/v1/guide/get-guide/${mentorId}`);
};

export const getAllMentors = () => {
  return axios.get(`/api/v1/guide/get-all-guide`);
};
export const mentorLogout = () => {
  localStorage.clear();
};
