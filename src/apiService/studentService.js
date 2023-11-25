import axios from "axios";

export const headers = {
  "Content-Type": "application/json",
};

// export const setAuthToken = () => {
//   const authToken = localStorage.getItem("token");
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
