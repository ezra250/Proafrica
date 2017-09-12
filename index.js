const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const subscribers = require('./api/subscribers');
const contact = require('./api/contactus');
const quotes = require('./api/Quotes');

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/src/index')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Put all API endpoints under '/api'
app.use("/users/subscribers", subscribers);
app.use("/users/contactus", contact);
app.use("/quotes", quotes);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/public/index.html'));
});
const port = process.env.PORT || 5002;
app.listen(port, function(){
  console.log("App listening to port: "+port);
});
