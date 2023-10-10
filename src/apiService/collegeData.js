import axios from "axios";

export const headers = {
  "Content-Type": "application/json",
};

const addNewCollege = (payload) => {
  return axios.post("/api/v1/college/post-college", payload);
};

export default addNewCollege;
