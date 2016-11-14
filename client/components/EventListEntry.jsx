import React from "react";
var EventListEntry = ({date, details, location, org_email, org_name, org_site, time, title, user_email, username, deleteEvent}) => (
  <div>
    <div>
      <h3 className="title">{title}</h3>
      <div>{date}</div>
      <div>{time}</div>
      <div>{location}</div>
      <div>{org_name}</div>
      <div>{org_site}</div>
      <div>{org_email}</div>
      <div>{username}</div>
      <div>{user_email}</div>
      <button type="button" onClick={() => deleteEvent(title)}>Delete Event</button>
    </div>
  </div>
);

export default EventListEntry;
