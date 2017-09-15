const bodyParser = require('body-parser');
const express = require('express');
// add the path module
const path = require('path');

const app = express();

const subscribers = require('./api/subscribers');
const contact = require('./api/contactus');
const quotes = require('./api/Quotes');
const order = require('./api/order');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// get reference to the client build directory
const staticFiles = express.static(path.join(__dirname, '../../client/build'))
// pass the static files (react app) to the express app. 
app.use(staticFiles);

// Put all API endpoints under '/api'
app.use("/users/subscribers", subscribers);
app.use("/users/contactus", contact);
app.use("/order/orders", order);
app.use("/quotes", quotes);

app.use('/*', staticFiles)

app.set('port', Number(process.env.PORT || 5002));
app.listen(app.get('port'), function () {
    console.log('Listening on ' + app.get('port'));
});