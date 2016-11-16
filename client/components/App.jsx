import React, {
  Component
} from "react";
// use connect since we are wrapping compinents in <Provider>
// connects a React component to Redux store.
import {
  connect
} from "react-redux";
import {
  bindActionCreators
} from "redux";
import * as actions from "../actions/actions";
import Dashboard from "./Dashboard";
import Navigation from "./Nav";

// The mapStateToProps function takes a single argument of the entire Redux store’s state and returns an object to be passed as props.
// It is often called a selector.
function mapStateToProps(state) {
  return {
    user: state.users,
    events: state.events
  };
}
// inject all actions as actions.
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

class App extends React.Component {
  render() {
    return (
      <div>
        <div id="app">
          <Navigation />
          { React.cloneElement(this.props.children, this.props) }
        </div>
      </div>
    );
  }
}

// It needs to be invoked two times. The first time with its arguments described above, and a second time, with the component.
// In this case, it references itself.
App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
// React.cloneElement clones this.props FOR this.props.children (i.e. Login component).
