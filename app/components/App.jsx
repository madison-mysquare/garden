import React, { Component } from "react";
// use connect since we are wrapping compinents in <Provider>
// connects a React component to Redux store.
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/actions";

// The mapStateToProps function takes a single argument of the entire Redux store’s state and returns an object to be passed as props.
// It is often called a selector.
function mapStateToProps(state, ownProps) {
  console.log("STATE ", state.user);
  console.log("OWN PROPS ", ownProps);
  return {
    user: state.user
  };
}
// inject all actions as actions.
function mapDispatchToProps(dispatch) {
  console.log("DISPATCH ", dispatch);
  return bindActionCreators(actions, dispatch);
}

class App extends Component {
  render() {
            console.log("THIS.PROPS ", this.props.user.name);
    return (
      <div>
        <div>Hi, this is my react/redux app component, {this.props.user.name}</div>

      </div>
    );
  }
}

// It needs to be invoked two times. The first time with its arguments described above, and a second time, with the component
App = connect(mapStateToProps, mapDispatchToProps)(App)

export default App;
