import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import App from "./components/App";
import "./styles.css";
import "./styles.scss";

const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <App name="Jane" />
  </Provider>,
  document.getElementById("app")
);
