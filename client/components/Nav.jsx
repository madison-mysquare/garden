import React from "react";
import { Link } from "react-router";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <h1>Flux/Redux 101</h1>
        <div>
          <Link to={`/`}>Dashboard</Link>
        </div>
        <div>
          <Link to={`/login`}>Login</Link>
        </div>
        <div>
          <Link to={`/create`}>Create Events</Link>
        </div>
      </nav>
    );
  }
}

export default Navigation;
