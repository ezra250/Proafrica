const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "us-cdbr-iron-east-05.cleardb.net",
    user: "b3841e2a9f806f",
    password: "713c6ef2",
    database: "heroku_53f224d72dd1804"
});

connection.connect(function(err){
    if(err){
        console.log("Connection is not established")
    }
})

module.exports.connection = connection;