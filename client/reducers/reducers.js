import { combineReducers } from "redux";
import users from "./userReducer";
import events from "./eventReducer";
// Add the reducer to the store on the routing key.
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  users,
  events,
  routing: routerReducer
});

/*
  IMPORTANT: Never mutate the state object/array.
  So use the es6 spread operator or Object.assigns() method for state changes.
*/
