import React from "react";
import EventTableListEntry from "./EventTableListEntry";

const EventTableList = ({ events, deleteEvent, updateEvent }) => {
  let eventList = events.map((event, i) =>
    <EventTableListEntry date={event.date} details={event.details} key={i}
    location={event.location} org_email={event.org_email} org_name={event.org_name}
    org_site={event.org_website} time={event.time} title={event.title} user_email={event.user_email}
    username={event.username} deleteEvent={deleteEvent} id={event._id}
    />
  );
    return (
      <div>
      <h3 className="event-title">Your Events</h3>
        <div>
          {eventList}
        </div>
      </div>
    );
  }

export default EventTableList;
