import React from "react";
import EventListEntry from "./EventListEntry";

const EventList = ({ events, deleteEvent }) => {
  let eventList = events.map((event, i) =>
    <EventListEntry date={event.date} details={event.details} key={i}
    location={event.location} org_email={event.org_email} org_name={event.org_name}
    org_site={event.org_website} time={event.time} title={event.title} user_email={event.user_email}
    username={event.username} deleteEvent={deleteEvent}
    />
  );
    return (
      <div className="eventList">
        {eventList}
      </div>
    );
  }

export default EventList;
