import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import store from "./store";

const app = document.getElementById('app');

const routes = (
  <Provider store={ store }>
    <App />
  </Provider>
);

ReactDOM.render(
  routes,
  app
);
