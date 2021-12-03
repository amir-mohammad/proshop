import React from "react";
import ReactDOM from "react-dom";
import "./bootstrap.css";
import "./index.css";
import {Provider} from 'react-redux';
import store from './Store.js';
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
