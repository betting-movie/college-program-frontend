import axios from "axios";

export const headers = {
  "Content-Type": "application/json",
};

const addNewCollege = (payload) => {
  return axios.post("/api/v1/college/post-college", payload);
};

export const getColleges = () => {
  return axios.get("/api/v1/college/get-colleges");
};

export default addNewCollege;
