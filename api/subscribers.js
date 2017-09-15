const express = require('express');

const app = express();
const validator = require('validator');
const isEmpty = require('lodash/isEmpty');
const nodemailer = require('nodemailer');

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
        // console.log("connection is established");
        // const sql = "INSERT INTO `heroku_53f224d72dd1804`.`subscribers`(`idsubscribers`,`email`)VALUES('',?)";
        // con.connection.query(sql, [req.body.email], function(err, success){
        //     if(err){
        //         if (err) throw err;
        //     }
        //     console.log("record inserted");
        //     res.status(200).json({success: true});
        // });

        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        nodemailer.createTestAccount((err, account) => {
            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'kibugenzad@gmail.com', // generated ethereal user
                    pass: 'uwiteka123@'  // generated ethereal password
                }
            });
        
            // setup email data with unicode symbols
            let mailOptions = {
                from: req.body.email, // sender address
                to: 'staff@limitless.rw', // list of receivers
                subject: 'Pro Africa subscriber', // Subject line
                html: '<div>'+req.body.email+'</div>' // html body
            };
        
            // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return res.status(400).json({status: 'fail'});
                }
                res.status(200).json({success: true});
                console.log('Message sent: %s', info.messageId);
                // Preview only available when sending through an Ethereal account
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            });
        });
    }
    
});

module.exports = app;