var path = require('path');
var Event = require('./controllers/eventController');

module.exports = function apiRoutes(app) {
  // app.get('/', function (req, res) {
  //   res.sendFile('index');
  // });
  //
  // app.get('/login', function (req, res) {
  //   res.sendFile('index');
  // });


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

  app.post('api/update/event', function(req, res) {
    Event.updateEvent(req.body.data);
  });

  app.post('/api/delete/event', function(req, res) {
    let deletedEvent = req.body.data;
    Event.deleteEvent(deletedEvent, function(response) {
      if (response) {
        res.send(response);
      } else {
        console.error(err);
        res.sendStatus(401);
      }
    });
  });

  // app.get('/register', function(req, res) {
  //   res.sendFile(__dirname, '../client/components/AuthContainer/Register.jsx');
  // });

  // app.get('/*', function(req, res) {
  //   res.redirect('/');
  // });

};
