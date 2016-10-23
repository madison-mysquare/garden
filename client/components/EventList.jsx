import React from "react";

const EventList = ({ date, details, location, org_name, org_site, org_email, time, title, user_email, username }) => {

    return (
      <div>
        <ul>
          <h3>{title}</h3>
          <li>{date}</li>
          <li>{time}</li>
          <li>{details}</li>
          <li>{location}</li>
          <li>{org_name}</li>
          <li>{org_site}</li>
          <li>{org_email}</li>
          <li>{username}</li>
          <li>{user_email}</li>
        </ul>
      </div>
    );
  }


export default EventList;
