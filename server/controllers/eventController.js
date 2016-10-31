var Event = require('../models/eventModel');
// using Mongoose CRUD operations. Not MongoDB.
const createEvent = (eventData, callback) => {
  Event.create(eventData, (err, event) => {
    if (err) {
      console.error(err);
      callback(err);
    } else {
      console.log("EVENT ",event);
      callback(event);
    }
  });
};

const fetchAllEvents = (callback) => {
  Event.find((err, events) => {
    if (err) {
      console.log(err);
    } else {
      console.log(events);
      callback(events);
    }
  });
};

const deleteEvent = (event, callback) => {
  Event.remove(event, (err, deletedEvent) => {
    if (err) {
      console.log("Could not delete event ",err);
      callback(err);
    } else {
      callback(true);
    }
  });
};


module.exports = {
  createEvent: createEvent,
  fetchAllEvents: fetchAllEvents,
  deleteEvent: deleteEvent
};
