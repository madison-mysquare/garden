import React from "react";
import EventTableList from "./EventTableList";
require("./settings.scss");

class Settings extends React.Component {
  constructor(props) {
    super(props);
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
        console.log("Could not updat e");
      }
    });
  }


  // render:
    // nav
    // list of events to be edited, deleted
    // top-down:
      // upload photo
      // personal info
      // change e-mail
      // change PW
  render() {
    return (
      <div>
        <EventTableList events={this.state.events} deleteEvent={this.deleteEvent.bind(this)}
        updateEvent={this.updateEvent.bind(this)} />
      </div>
    );
  }
}

export default Settings;
