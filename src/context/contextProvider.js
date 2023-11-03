import React, { createContext, useReducer } from "react";

import {
  initialState as browserInfoInitialState,
  reducer as browserInfoReducer,
} from "./browserInfo";

export const contextBrowser = createContext({});

const ContextProvider = contextBrowser.Provider;

const ContextProviderWrapper = ({ children }) => {
  const [browserInfoData, browserInfoDispatch] = useReducer(
    browserInfoReducer,
    browserInfoInitialState,
  );
  const store = {
    browserInfo: {
      state: browserInfoData,
      dispatch: browserInfoDispatch,
    },
  };
  return <ContextProvider value={store}>{children}</ContextProvider>;
};

export default ContextProviderWrapper;
