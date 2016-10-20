var path = require('path');
module.exports = function apiRoutes(app) {

  app.get('/*', function (req, res) {
    res.sendFile(path.join('index.html'));
  });

  // app.get('/login', function (req, res) {
  //   res.sendFile(path.join(__dirname, '../app/components/Login.jsx'));
  // });

  // app.get('/login', function (req, res) {
  //   res.status(201);
  // });

};
