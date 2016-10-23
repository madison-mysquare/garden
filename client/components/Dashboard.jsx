import React from "react";
import EventList from "./EventList";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentWillMount() {
    this.props.getEvents((events) => {
      this.setState({
        events: events.data
      });
    });
  }

  render() {
    let eventList = this.state.events.map((event) =>
      <EventList date={event.date} details={event.details} key={event.id}
      location={event.location} org_email={event.org_email} org_name={event.org_name}
      org_site={event.org_website} time={event.time} title={event.title} user_email={event.user_email}
      username={event.username}
      />
    );

    return (
      <div>
        <h3>DASHBOARD</h3>
        <div>
          {eventList}
        </div>
      </div>
    );
  }
}

export default Dashboard;
