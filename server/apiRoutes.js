var path = require('path');
var Event = require('./controllers/eventController');

module.exports = function apiRoutes(app) {

  app.get('/*', function (req, res) {
    res.sendFile(__dirname, '../client/components/index.html');
  });

  app.get('/api/get/events', function (req, res) {
    // Event.createEvent(function() {
      Event.fetchAllEvents(function(event) {
        res.send(event);
      });
    // });
  });

  app.post('/api/delete/event', function(req, res) {
    let deletedEvent = req.body.data;
    Event.deleteEvent(deletedEvent, function(deleted) {
      if (deleted) {
        res.send(deleted);
      } else {
        console.error(err);
        res.send(401);
      }
    });
  });

  // app.get('/login', function (req, res) {
  //   res.status(201);
  // });

};
