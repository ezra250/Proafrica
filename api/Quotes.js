const express = require('express');

const app = express();

const con = require('../db/connection');

app.get('/data.json', function(req, res, next) {
    res.sendFile(__dirname +'/data.json')
});

module.exports = app;