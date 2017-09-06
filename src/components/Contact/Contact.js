import React from 'react';

import './styles.css';

const Contact = () => (
    <div className="container-fluid contact">
        <div className="row">
        <div class="col-md-6 col-md-offset-6">
            <div id="logbox">
                <form id="signup">
                    <h1>Talk to us</h1>
                    <input name="user[name]" type="text" placeholder="What's your name?" pattern="^[\w]{3,16}$" autofocus="autofocus" required="required" className="input pass"/>
                    <input name="user[password]" type="email" placeholder="What's your email?" required="required" className="input email"/>
                    <textarea name="user[password]" placeholder="Message" required="required" className="input pass" cols="5" row="3"/>
                    <input type="submit" value="Submit" className="inputButton"/>
                </form>
            </div>
       </div>
        </div>
    </div>
);

export default Contact;
