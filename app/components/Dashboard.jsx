import React from "react";
import FilterLink from "./FilterLink";
import { Link } from "react-router";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    console.log("Dashboard props ", props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <p>DASHBOARD</p>
        <FilterLink filter="login">LOGIN</FilterLink>
        <div>
        <Link to={`/login`}>login link</Link>

        </div>
      </div>
    );
  }
}

export default Dashboard;
