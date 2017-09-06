import React from 'react';

import './styles.css'

const OrderForm = () => (
    <div className="container-fluid contact">
        <div className="row">
            <div class="col-md-6 col-md-offset-6">
                <div id="logbox">
                    <form id="signup">
                        <h1>Ordering form</h1>
                        <span className="help-block">All fields is required!</span>
                        <input 
                            name="user[name]" 
                            type="number" 
                            placeholder="Quantity" 
                            pattern="^[\w]{3,16}$" autofocus="autofocus" 
                            required="required" 
                            className="input pass"/>
                        <input 
                            name="user[name]" 
                            type="text" placeholder="What's your name?" 
                            pattern="^[\w]{3,16}$" autofocus="autofocus" 
                            required="required" 
                            className="input pass"/>
                        <input 
                            name="user[name]" 
                            type="text" placeholder="What's your email?" 
                            pattern="^[\w]{3,16}$" autofocus="autofocus" 
                            required="required" 
                            className="input pass"/>
                        <input 
                            name="user[name]" 
                            type="text" placeholder="What's your phone number?" 
                            pattern="^[\w]{3,16}$" autofocus="autofocus" 
                            required="required" 
                            className="input pass"/>
                        <input 
                            name="user[name]" 
                            type="text" placeholder="What's your location?" 
                            pattern="^[\w]{3,16}$" autofocus="autofocus" 
                            required="required" 
                            className="input pass"/>
                        <input type="submit" value="Submit" className="inputButton"/>
                    </form>
                </div>
        </div>
    </div>
</div>
);

export default OrderForm;