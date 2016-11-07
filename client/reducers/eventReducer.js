
const events = (state=[], action) => {
  switch (action.type) {
    case "FETCH_EVENTS": {
      state = Object.assign({}, state,
        action.payload
      );
      break;
    }
    // case "CREATE_EVENT": {
    //   state = Object.assign({}, state,
    //     action.payload
    //   );
    //   break;
    // }
    case "DELETE_EVENT": {
      // delete event from store/state if action.payload === true.
      const eventTitle = action.data;
      for (let i in state) {
        if (state[i].title !== eventTitle) {
          Object.assign({}, state, state[i].title);
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
