import React from "react";
import { Link } from "react-router";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <h1>Welcome to the building of this app</h1>
        <div>
          <Link to={`/dashboard`}>Dashboard</Link>
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
