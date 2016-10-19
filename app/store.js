import { applyMiddleware, createStore } from "redux";
import axios from "axios";
import logger from "redux-logger";
import reducers from "./reducers/reducers";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

// logger modifies the actions.
// const logger = (store) => (next) => (action) => {
//   console.log("action fired");
//   next(action);
// };
// const error = (store) => (next) => (action) => {
//   try {
//     next(action);
//   } catch(e) {
//     console.log(error);
//   }
// };

const middleware = applyMiddleware(promise(), thunk, logger());

const store = createStore(reducers, middleware);

store.subscribe(() => {
  console.log('store changed ', store.getState());
});

// store.dispatch({type: "CHANGE_NAME", payload: "Jim"});
// store.dispatch({type: "CHANGE_PASSWORD", payload: "JIMBONE"});
// store.dispatch({type: "CHANGE_PASSWORD", payload: "CHANGED IT"});

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

store.dispatch({
  type: "CHANGE_NAME",
  payload: "JIMbot"
});




export default store;
