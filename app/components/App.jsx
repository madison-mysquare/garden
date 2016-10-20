import React, { Component } from "react";
// use connect since we are wrapping compinents in <Provider>
// connects a React component to Redux store.
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/actions";
import Dashboard from "./Dashboard";

// The mapStateToProps function takes a single argument of the entire Redux store’s state and returns an object to be passed as props.
// It is often called a selector.
function mapStateToProps(state, ownProps) {
  console.log("STATE ", state.user);
  return {
    user: state.user
  };
}
// inject all actions as actions.
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

class App extends React.Component {
  render() {
    console.log("this.props ", this.props);
    return (
      <div>
        <nav>
          Hi, this is the Garden!
        </nav>
        { React.cloneElement(this.props.children, this.props) }
      </div>
    );
  }
}

// It needs to be invoked two times. The first time with its arguments described above, and a second time, with the component
App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
// React.cloneElement clones this.props FOR this.props.children (i.e. Login component).
