const initialState ={
  name: "",
  password: ""
};

const users = (state=initialState, action) => {
  switch (action.type) {
    case "CHANGE_NAME": {
      state = Object.assign({}, state, {
        name: action.payload
      });
      break;
    }
    case "CHANGE_PASSWORD": {
      state = Object.assign({}, state, {
        password: action.payload
      });
      break;
    }
  }
  return state;
};

export default users;
