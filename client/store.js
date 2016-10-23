import { applyMiddleware, createStore } from "redux";
// The react-router-redux library simply enhances a history instance to allow it to synchronize any changes it receives into application state.
import { syncHistoryWithStore, routerMiddleware } from "react-router-redux";
import { browserHistory } from "react-router";
import axios from "axios";
import logger from "redux-logger";
import rootReducer from "./reducers/reducers";
// Redux Thunk middleware allows you to write action creators that return a function instead of an action.
// The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

// apply all the middleware desired in a variable and use that variable as part of store creation.
const middleware = applyMiddleware(routerMiddleware(browserHistory), promise(), thunk, logger());
// store has access to all the reducers and middleware we have.
const store = createStore(rootReducer, middleware);

store.subscribe(() => {
  console.log('store changed ++> ', store.getState());
});
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

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);
export default store;
