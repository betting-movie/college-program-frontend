export const initialState = {
  browserType: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "browser-type":
      return { ...state, browserType: action.value };
    default:
      return { ...state };
  }
};
