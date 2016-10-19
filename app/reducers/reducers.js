import { combineReducers } from "redux";
import userReducer from "./userReducer";

export default combineReducers({
  user: userReducer
});

/*
  IMPORTANT: Never mutate the state object/array.
  So use the es6 spread operator or Object.assigns() method for state changes.
*/
