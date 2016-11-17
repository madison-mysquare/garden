import React from "react";
import { Link } from "react-router";
require("../sass/nav.scss");

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <div>
        <nav className="nav-container">
          <div>LOGO HERE</div>
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
      // </div>
    );
  }
}

export default Navigation;
