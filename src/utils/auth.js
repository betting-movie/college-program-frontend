export const isUserAuthenticated = () => {
  const authToken = localStorage.getItem("token");
  return !!authToken;
};

export const getRole = () => {
  return localStorage.getItem("userRole");
};
