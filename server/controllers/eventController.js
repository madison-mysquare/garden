var Event = require('../models/eventModel');
// using Mongoose CRUD operations. Not MongoDB.
const createEvent = () => {
  Event.create({
    id: 1,
    date: '01/25/2017',
    time: '12:30',
    title: 'STEM',
    location: '30-51 Hobart Street',
    org_name: 'Botics',
    org_website: 'wwww.botics.com',
    org_email: 'botics@gmail.com',
    username: 'jimbot',
    user_email: 'mrjimbot@gmail.com'
  }, (err, event) => {
    if (err) {
      console.log(err);
    } else {
      console.log("EVENT ",event);
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
