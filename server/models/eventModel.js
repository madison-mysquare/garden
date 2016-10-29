var mongoose = require('../data/index');

var EventSchema = new mongoose.Schema({
  id: Number,
  date: String,
  time: String,
  title: String,
  location: String,
  org_name: String,
  org_website: String,
  org_email: String,
  username: String,
  user_email: String,
});

var Event = mongoose.model('Event', EventSchema);
module.exports = Event;
