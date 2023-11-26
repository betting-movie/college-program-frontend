export const isUserAuthenticated = () => {
  const authToken = localStorage.getItem("token");
  return !!authToken;
};

export const getRole = () => {
  return localStorage.getItem("userRole");
};

export const setAuthToken = () => {
  const authToken = localStorage.getItem("token");
  const newHeaders = { ...headers };

  if (authToken) {
    newHeaders["Authorization"] = `Bearer ${authToken}`;
  }

  return newHeaders;
};
