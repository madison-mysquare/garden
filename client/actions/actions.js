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
export function fetchAllEvents(callback) {
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


export function deleteOneEvent(event, callback) {
  return dispatch => {
    axios.post('api/delete/event', { data: event })
    .then((response) => {
      store.dispatch({
        type: "DELETE_EVENT",
        payload: { data: event.title }
      });
      callback(response.data);
    })
    .catch((err) => {
      dispatch({
        type: "DELETE_EVENT_REJECTED",
        payload: err
      });
    });
  };
}


export function createEvent(data, callback) {
  return dispatch => {
    axios.post('api/create/event', { data: data })
    .then((response) => {
      // store.dispatch({
      //   type: "CREATE_EVENT",
      //   payload: { data: data }
      // });
      // callback(response);
      callback();
    })
    .catch((err) => {
      dispatch({
        type: "CREATE_EVENT_REJECTED",
        payload: err
      });
    });
  };
}
