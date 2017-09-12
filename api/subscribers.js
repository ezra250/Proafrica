const express = require('express');

const app = express();
const validator = require('validator');
const isEmpty = require('lodash/isEmpty');

const con = require('../db/connection');

//validate form
function validateInput(data){
    let errors = {};

    if(validator.isEmpty(data.email)){
        errors.email = 'This field is required'
    }

    if(!validator.isEmail(data.email)){
        errors.email = "Email is invalid";
    }

    return {
        errors,
        isValid : isEmpty(errors)
    }
}

app.post('/', function(req, res) {
    const {errors, isValid } = validateInput(req.body);
    if(!isValid){
        res.status(400).json(errors);
    }else{
        console.log("connection is established");
        const sql = "INSERT INTO `heroku_53f224d72dd1804`.`subscribers`(`idsubscribers`,`email`)VALUES('',?)";
        con.connection.query(sql, [req.body.email], function(err, success){
            if(err){
                if (err) throw err;
            }
            console.log("record inserted");
            res.status(200).json({success: true});
        });
    }
    
});

module.exports = app;