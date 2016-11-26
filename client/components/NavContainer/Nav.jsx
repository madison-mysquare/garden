import React from "react";
import { Link } from "react-router";
require("./nav.scss");

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav className="nav-container">
          <div>LOGO HERE</div>
          <div>
            <Link to={`/`}>Dashboard</Link>
          </div>
          <div>
            <Link to={`/register`}>Register</Link>
          </div>
          <div>
            <Link to={`/host`}>Create</Link>
          </div>
          <div>
            <Link to={`/settings`}>Settings</Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
