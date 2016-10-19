import axios from "axios";


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
