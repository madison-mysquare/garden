import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { Provider } from "react-redux";
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import routes from "./routes";
import store from "./store";

const app = document.getElementById('app');

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Login} />
        <Route path="dashboard" component={Dashboard}/>
        </Route>
    </Router>
  </Provider>
);

ReactDOM.render(
  router,
  app
);
