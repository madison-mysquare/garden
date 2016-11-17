import React from "react";

var EventListEntry = ({date, details, location, org_email, org_name, org_site, time, title, user_email, username, deleteEvent, id}) => (
  <div className="event-list-entry-container">
    <h3 className="event-title">{title}</h3>
    <div className="event-list-entry">
      <span>Date: {date}</span>
      <span>Time: {time}</span>
      <span>Location: {location}</span>
      <span>Host: {username}</span>
      <div>
        <button type="button" onClick={() => deleteEvent(id)}>Delete Event</button>
      </div>
    </div>
  </div>
);

export default EventListEntry;
