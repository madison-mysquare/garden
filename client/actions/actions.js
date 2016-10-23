import axios from "axios";
import store from "../store";

export function changeName(name) {
  return {
    type: "CHANGE_NAME",
    payload: {
      name: name
    }
  };
}

export function changePassword(password) {
  return {
    type: "CHANGE_PASSWORD",
    payload: {
      password: password
    }
  };
}

// we are able to create functional actions like this one, due to Thunk middleware.
export function getEvents(callback) {
  return dispatch => {
    axios.get('api/get/events')
    .then((response) => {
      store.dispatch({
        type: "FETCH_EVENTS",
        payload: response.data
      });
      callback(response);
    })
    .catch((err) => {
      dispatch({
        type: "FETCH_EVENTS_REJECTED",
        payload: err
      });
    });
  };
}
