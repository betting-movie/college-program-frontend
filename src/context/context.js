import React from "react";

const snackbarActions = {
  SHOW_SNACKBAR: "showSnackbar",
  HIDE_SNACKBAR: "hideSnackbar",
};

const initialState = {
  message: "",
  openSnackbar: false,
  severityType: "success",
};

const reducer = (state, action) => {
  switch (action.type) {
    // Snackbar
    case snackbarActions.SHOW_SNACKBAR: {
      const newstate = {
        ...state,
        openSnackbar: true,
        message: action.obj.message,
        severityType: action.obj.severityType,
      };
      return newstate;
    }

    default:
      return state;
  }
};

export const Context = React.createContext();

export const CustomContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const value = {
    message: state.message,
    openSnackbar: state.openSnackbar,
    severityType: state.severityType,

    // Snackbar
    showSnackbar: (message, severity) => {
      const obj = {
        message,
        severityType: severity,
      };
      dispatch({ type: snackbarActions.SHOW_SNACKBAR, obj });
    },
    hideSnackbar: () => {
      dispatch({ type: snackbarActions.HIDE_SNACKBAR });
    },
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
