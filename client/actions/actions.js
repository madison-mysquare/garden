import axios from "axios";
import store from "../store";

const utils = {
  changeName(name) {
    return {
      type: "CHANGE_NAME",
      payload: {
        name: name
      }
    };
  },

  changePassword(password) {
    return {
      type: "CHANGE_PASSWORD",
      payload: {
        password: password
      }
    };
  },

  createEvent(data) {
    return dispatch => {
      axios.post('api/create/event', { data: data })
      .then((response) => {
        store.dispatch({
          type: "CREATE_EVENT",
          payload: { data: data }
        });
      })
      .catch((err) => {
        dispatch({
          type: "CREATE_EVENT_REJECTED",
          payload: err
        });
      });
    };
  },

  // we are able to create functional actions like this one, due to Thunk middleware.
  fetchAllEvents(callback) {
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
  },

  updateEvent(event, callback) {
    return dispatch => {
      axios.post('api/update/event', { data: event })
      .then((response) => {
        store.dispatch({
          type: "UPDATE_EVENT",
          payload: { data: event }
        });
      })
      .catch((err) => {
        dispatch({
          type: "UPDATE_EVENT_REJECTED",
          payload: err
        });
      });
    };
  },

  deleteOneEvent(event, callback) {
    return dispatch => {
      axios.post('api/delete/event', { data: event })
      .then((response) => {
        store.dispatch({
          type: "DELETE_EVENT",
          payload: { data: event.id }
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
  },
};
export default utils;
