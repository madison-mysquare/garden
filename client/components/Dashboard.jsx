import React from "react";
import EventList from "./EventList";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      events: [],
    };
    // this.deleteEvent = this.deleteEvent.bind(this);
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
      <div className="dash">
        <h3>DASHBOARD</h3>
        <div>
          <EventList events={this.state.events} deleteEvent={this.deleteEvent.bind(this)} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
