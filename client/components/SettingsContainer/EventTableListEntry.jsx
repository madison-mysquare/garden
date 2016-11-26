import React from "react";

var EventTableListEntry = ({date, details, location, org_email, org_name, org_site, time, title, user_email, username, deleteEvent, updateEvent, id}) => (
  <div>
    <table className="event-table">
      <thead className="event-row">
        <tr id="event-headers">
          <th>Title</th>
          <th>Date</th>
          <th>Time</th>
          <th>Location</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr id="event-table-data">
          <td>{title}</td>
          <td>{date}</td>
          <td>{time}</td>
          <td>{location}</td>
          <td><button type="button" onClick={() => updateEvent(id)}></button></td>
          <td><button type="button" onClick={() => deleteEvent(id)}></button></td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default EventTableListEntry;
