import axios from "axios";
import store from "../store";

const appActions = {

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
};
export default appActions;
