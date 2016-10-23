var path = require('path');
var events = require('../data/dummy-data');

module.exports = function apiRoutes(app) {

  app.get('/*', function (req, res) {
    res.sendFile(__dirname, '../client/components/index.html');
  });

  app.get('/api/get/events', function (req, res) {
    res.send(events);
  });

  // app.get('/login', function (req, res) {
  //   res.status(201);
  // });

};
