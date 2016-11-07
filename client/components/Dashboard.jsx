import React from "react";
import EventList from "./EventList";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      events: [],
    };
    this.deleteEvent = this.deleteEvent.bind(this);
  }
  componentWillMount() {
    console.log("REACHING FETCH");
    this.props.fetchAllEvents((events) => {
      this.setState({
        events: events.data
      });
    });
  }
  deleteEvent(e) {
    e.preventDefault();
    let deletedEvent = { title: e.target.title };
    console.log("DELETED ", e  );
    this.props.deleteOneEvent(deletedEvent, (deleted) => {
      if (deleted) {
        console.log("making it to refetch!");
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
    let eventList = this.state.events.map((event, i) =>
      <EventList date={event.date} details={event.details} key={i}
      location={event.location} org_email={event.org_email} org_name={event.org_name}
      org_site={event.org_website} time={event.time} title={event.title} user_email={event.user_email}
      username={event.username} deleteEvent={this.deleteEvent.bind(this)}
      />
    );

    return (
      <div className="dash">
        <h3>DASHBOARD</h3>
        <div>
          {eventList}
        </div>
      </div>
    );
  }
}

export default Dashboard;
