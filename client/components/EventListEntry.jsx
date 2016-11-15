import React from "react";
var EventListEntry = ({date, details, location, org_email, org_name, org_site, time, title, user_email, username, deleteEvent}) => (
  <div>
    <div className="event-list">
      <h3 className="event-title">{title}</h3>
      <div>Date: {date}</div>
      <div>Time: {time}</div>
      <div>Location: {location}</div>
      <div>Host: {username}</div>
      <button type="button" onClick={() => deleteEvent(title)}>Delete Event</button>
    </div>
  </div>
);

export default EventListEntry;
