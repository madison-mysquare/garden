import React from "react";

const EventList = ({ date, location, org_name, org_site, org_email, time, title, user_email, username }) => {

    return (
      <div>

          <h3>{title}</h3>
          <div>{date}</div>
          <div>{time}</div>
          <div>{location}</div>
          <div>{org_name}</div>
          <div>{org_site}</div>
          <div>{org_email}</div>
          <div>{username}</div>
          <div>{user_email}</div>

      </div>
    );
  }


export default EventList;
