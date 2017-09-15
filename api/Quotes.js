const express = require('express');

const app = express();

app.get('/data.json', function(req, res, next) {
    res.sendFile(__dirname +'/data.json')
});

module.exports = app;