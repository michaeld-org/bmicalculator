const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'build')));

// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

// Set port
app.set('port', process.env.PORT || 3000);

// Create HTTP server
http.createServer(app).listen(app.get('port'), function() {
  console.log('Server listening on port ' + app.get('port'));
});
