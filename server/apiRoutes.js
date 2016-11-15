var path = require('path');
var Event = require('./controllers/eventController');

module.exports = function apiRoutes(app) {
  app.get('/', function (req, res) {
    res.sendFile('index');
  });

  app.get('/api/get/events', function (req, res) {
    Event.fetchAllEvents(function(event) {
      res.send(event);
    });
  });

  app.post('/api/create/event', function(req, res) {
    Event.createEvent(req.body.data, function(event) {
      if (event) {
        res.redirect('/');
      } else {
        res.sendStatus(401);
      }
    });
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

};
