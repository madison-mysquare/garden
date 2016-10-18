
const userReducer = (state={}, action) => {
  if (action.type === "CHANGE_NAME") {
    state = Object.assign({}, state, {
      name: action.payload
    });
  }
  else if (action.type === "CHANGE_PASSWORD") {
    state = Object.assign({}, state, {
      password: action.payload
    });
  }
  return state;
};

export default userReducer;
