import { combineReducers } from "redux";
import userReducer from "./userReducer";
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  userReducer,
  routing: routerReducer
});

/*
  IMPORTANT: Never mutate the state object/array.
  So use the es6 spread operator or Object.assigns() method for state changes.
*/
