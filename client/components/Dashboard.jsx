import React from "react";
import EventList from "./EventList";
require("../sass/dashboard.scss");

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      events: [],
    };
  }
  componentWillMount() {
    console.log("REACHING FETCH");
    this.props.fetchAllEvents((events) => {
      this.setState({
        events: events.data
      });
    });
  }
  deleteEvent(title) {
    let deletedEvent = { title: title };
    // console.log("DELETED EVENT ", deletedEvent);
    this.props.deleteOneEvent(deletedEvent, (deleted) => {
      if (deleted) {
        this.props.fetchAllEvents((events) => {
          this.setState({
            events: events.data
          });
        });
      } else {
        console.log("Could not delete");
      }
    });
  }

  render() {
    return (
      <div className="dashboard">
        <h2 className="dashboard-title">Dashboard</h2>
        <div>
          <EventList events={this.state.events} deleteEvent={this.deleteEvent.bind(this)} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
