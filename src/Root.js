import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "reducers";
import React from "react";

const Root = ({ children }) => {
  const store = createStore(reducers, {});
  return <Provider store={store}>{children}</Provider>;
};

export default Root;
