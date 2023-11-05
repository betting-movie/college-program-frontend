import React from "react";

const snackbarActions = {
  SHOW_SNACKBAR: "showSnackbar",
  HIDE_SNACKBAR: "hideSnackbar",
};

const mentorFilterActions = {
  MENTOR_FILTER: "mentorFilter",
};

// Initialize & Define states

const initialState = {
  message: "",
  openSnackbar: false,
  severityType: "success",
  filterSelected: "All",
};

// Reducer

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

    case mentorFilterActions.MENTOR_FILTER: {
      const newstate = {
        ...state,

        filterSelected: action.obj.filterSelected,
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
    filterSelected: state.filterSelected,

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

    mentorFilter: (filterSelected) => {
      console.log(filterSelected);
      const obj = {
        filterSelected,
      };
      dispatch({ type: mentorFilterActions.MENTOR_FILTER, obj });
    },
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
