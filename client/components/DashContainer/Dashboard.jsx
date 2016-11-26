import React from "react";
import EventList from "../EventList";
require("./dashboard.scss");

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      events: [],
    };
  }
  componentWillMount() {
    console.log("REACHING FETCH", this.props);
    this.props.fetchAllEvents((events) => {
      this.setState({
        events: events.data
      });
    });
  }

  render() {
    return (
      <div className="dashboard">
        <h2 className="dashboard-title">Madison Square My Garden</h2>
        <div>
          <EventList events={this.state.events} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
