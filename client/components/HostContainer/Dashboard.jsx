import React from "react";
import EventList from "./EventList";
require("../../sass/dashboard.scss");

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
  deleteEvent(id) {
    let deletedEvent = {
      _id: id
    };
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
  updateEvent(id) {
    let updatedEvent = {
      _id: id
    };
    this.props.updateEvent(updatedEvent, (updated) => {
      if (updated) {
        this.props.fetchAllEvents((events) => {
          this.setState({
            events: events.data
          });
        });
      } else {
        console.log("Could not update");
      }
    });
  }

  render() {
    return (
      <div className="dashboard">
        <h2 className="dashboard-title">Madison Square My Garden</h2>
        <div>
          <EventList events={this.state.events} deleteEvent={this.deleteEvent.bind(this)} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
