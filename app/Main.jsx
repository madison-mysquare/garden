import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import store from "./store";

// const router = (
//   <Provider store={ store }>
//     <Router>
//       <Route path="/" component={ App }>
//       </Route>
//     </Router>
//   </Provider>
// );

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
