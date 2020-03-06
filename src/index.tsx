
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Pages from "./views/Pages";
import { Provider } from "react-redux";
import { setupStore } from "./redux/store";

const store = setupStore();

ReactDOM.render(
  <Provider store={store}>
    <Pages />
  </Provider>,
  document.getElementById("root")
);