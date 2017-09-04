import React from 'react';

import './styles.css';

const Contact = () => (
    <div className="container-fluid contact">
        <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-8"></div>
            <div className="col-xs-12 col-sm-6 col-md-4 details">
                <h2><span className="text1">Contact</span><span className="text2"> Us</span></h2>
                <hr></hr>
                <div className="content">
                    <div className="form-group col-sm-6">
                        <label>Full Name:</label>
                        <input type="text" className="form-control"/>
                    </div>

                    <div className="form-group col-sm-6">
                        <label>Email:</label>
                        <input type="text" className="form-control"/>
                    </div>

                    <div className="form-group col-sm-12">
                        <label>Message:</label>
                        <textarea className="form-control" cols="5" rows="4"/>
                    </div>
                    <div className="form-group col-sm-12">
                        <button className="btn btn-default">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Contact;