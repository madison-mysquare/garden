import { applyMiddleware, createStore } from "redux";
import { syncHistoryWithStore, routerMiddleware } from "react-router-redux";
import { browserHistory } from "react-router";
import axios from "axios";
import logger from "redux-logger";
import rootReducer from "./reducers/reducers";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

const user = {
  name: "",
  password: ""
};

const defaultState ={
  user,
};

const middleware = applyMiddleware(routerMiddleware(browserHistory), promise(), thunk, logger());

const store = createStore(rootReducer, middleware);

store.subscribe(() => {
  console.log('store changed ++> ', store.getState());
});

// store.dispatch({type: "CHANGE_NAME", payload: "Jim"});
// store.dispatch({type: "CHANGE_PASSWORD", payload: "JIMBONE"});
// store.dispatch({type: "CHANGE_PASSWORD", payload: "CHA IT"});

// store.dispatch((dispatch) => {
//   dispatch({type: "CHANGE_NAME", payload: "jimbot"});
//   dispatch({type: "CHANGE_PASSWORD", payload: "pass"});
//   axios.get("/")
//     .then((response) => {
//       console.log(resonse);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

const history = syncHistoryWithStore(browserHistory, store);
export default store;
