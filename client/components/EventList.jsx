import React from "react";

const EventList = ({ date, location, org_name, org_site, org_email, time, title, user_email, username, deleteEvent }) => {

    return (
      <div>
        <form onSubmit={deleteEvent}>
          <h3 className="title" ref="title">{title}</h3>
          <div>{date}</div>
          <div>{time}</div>
          <div>{location}</div>
          <div>{org_name}</div>
          <div>{org_site}</div>
          <div>{org_email}</div>
          <div>{username}</div>
          <div>{user_email}</div>
          <button>Delete Event</button>
        </form>
      </div>
    );
  }


export default EventList;
