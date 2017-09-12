const express = require('express');

const app = express();
const validator = require('validator');
const isEmpty = require('lodash/isEmpty');
const nodemailer = require('nodemailer');

const con = require('../db/connection');

//validate form
function validateInput(data){
    let errors = {};

    if(validator.isEmpty(data.email)){
        errors.email = 'This field is required'
    }

    if(validator.isEmpty(data.name)){
        errors.name = 'This field is required'
    }

    if(validator.isEmpty(data.message)){
        errors.message = "This field is required";
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
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        nodemailer.createTestAccount((err, account) => {
                // create reusable transporter object using the default SMTP transport
                let transporter = nodemailer.createTransport({
                    host: 'mail.limitless.rw',
                    port: 587,
                    secure: false, // true for 465, false for other ports
                    auth: {
                        user: 'limitless', // generated ethereal user
                        pass: 'Limitl3ss@g3ncyRW'  // generated ethereal password
                    }
                });
            
                // setup email data with unicode symbols
                let mailOptions = {
                    from: req.body.email, // sender address
                    to: 'staff@limitless.rw', // list of receivers
                    subject: 'Pro Africa', // Subject line
                    html: '<div>'+req.body.message+'</div>' // html body
                };
            
                // send mail with defined transport object
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        return res.status(400).json({status: fail});

                    }
                    res.status(200).json({status: success});
                    console.log('Message sent: %s', info.messageId);
                    // Preview only available when sending through an Ethereal account
                    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                });
            });
    }
});

module.exports = app;