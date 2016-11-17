import axios from "axios";
import store from "../store";

const utilActions = {
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

export default utilActions;
