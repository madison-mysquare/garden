
const events = (state=[], action) => {
  switch (action.type) {
    case "FETCH_EVENTS": {
      state = Object.assign({}, state,
        action.payload
      );
      break;
    }
    case "CREATE_EVENT": {
      state = Object.assign({}, state,
        action.payload
      );
      break;
    }
    case "UPDATE_EVENT": {
      state = Object.assign({}, state,
        action.payload
      );
      break;
    }
    case "DELETE_EVENT": {
      // delete event from store/state if action.payload === true.
      const eventId = action.data;
      for (let i in state) {
        if (state[i].id !== eventId) {
          Object.assign({}, state, state[i].id);
        }
      }
      break;
    }
    case "FETCH_EVENTS_REJECTED": {
      state = Object.assign({}, state, {
        message: "Sorry, no events"
      });
      break;
    }
    case "UPDATE_EVENT_REJECTED": {
      state = Object.assign({}, state, {
        message: "Sorry, update unsuccessful"
      });
      break;
    }
    case "DELETE_EVENT_REJECTED": {
      // send a message;
      state = Object.assign({}, state, {
        message: "Sorry, that event either doesn't exist of can't be deleted"
      });
      break;
    }
  }
  return state;
};

export default events;
