
const events = (state=[], action) => {
  switch (action.type) {
    case "FETCH_EVENTS": {
      state = Object.assign({}, state,
        action.payload
      );
      break;
    }
    case "FETCH_EVENTS_REJECTED": {
      state = Object.assign({}, state, {
        message: "NO EVENTS"
      });
      break;
    }
  }
  return state;
};

export default events;
