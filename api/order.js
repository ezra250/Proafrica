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

    if(validator.isEmpty(data.name)){
        errors.name = 'This field is required'
    }

    if(validator.isEmpty(data.phone)){
        errors.phone = 'This field is required'
    }

    // if(validator.isEmpty(data.quantity)){
    //     errors.quantity = 'This field is required'
    // }

    if(validator.isEmpty(data.phone)){
        errors.phone = "This field is required";
    }

    if(validator.isEmpty(data.location)){
        errors.location = "This field is required";
    }

    return {
        errors,
        isValid : isEmpty(errors)
    }
}

app.post('/', function(req, res) {
    const {errors, isValid } = validateInput(req.body);
    const initialValue = 10000
    if(!isValid){
        res.status(400).json(errors);
    }else{
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
                    subject: 'Pro Africa', // Subject line
                    html: '<div> <table><tr><td>Quantity:</td><td>'
                    +req.body.quantity+'</tr><tr><td>Fullname:</td><td>'
                    +req.body.name+'</tr><tr><td>Email:</td><td>'
                    +req.body.email+'</tr><tr><td>Location:</td><td>'
                    +req.body.location+' FRW</tr><tr><td>Total amount:</td><td>'
                    +req.body.quantity  * initialValue+'</tr></table></div>' // html body
                };
            
                // send mail with defined transport object
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        return res.status(400).json({status: 'fail'});
                    }
                    res.status(200).json({status: 'success'});
                    console.log('Message sent: %s', info.messageId);
                    // Preview only available when sending through an Ethereal account
                    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                });
            });
    }
});

module.exports = app;