import { createStore } from "redux";
import reducers from "./reducers/reducers";


const store = createStore(reducers);

store.subscribe(() => {
  console.log('store changed ', store.getState());
});

store.dispatch({type: "CHANGE_NAME", payload: "Jim"});
store.dispatch({type: "CHANGE_PASSWORD", payload: "JIMBONE"});
store.dispatch({type: "CHANGE_PASSWORD", payload: "CHANGED IT"});
