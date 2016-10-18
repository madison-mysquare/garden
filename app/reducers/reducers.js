import { combineReducers } from "redux";
import userReducer from "./userReducer";

const reducers = combineReducers({
  user: userReducer
});

export default reducers;
/*
  IMPORTANT: Never mutate the state object/array.
  So use the es6 spread operator or Object.assigns() method for state changes.
*/
