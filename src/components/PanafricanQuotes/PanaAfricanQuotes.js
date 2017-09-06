import React from 'react';

import './styles.css';

const PanaAfricanQuotes = () => (
    <div className="container panafrica">
        <div className="col-md-7">
            <div className="row">
                <div className="col-md-12">
                    <h3 className="text1">Pana African Quotes</h3>
                    <div className="panel  panel-default col-md-6">

                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-5 subscribebox">
            <div className="panel  panel-default col-md-12">
                <div className="panel-heading"><h3>Hey! Want more free Pana African Quotes? Subscribe to our newsletter!</h3></div>
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            <input type="text" placeholder="Email"/>
                        </div>
                        <input type="submit" value="Get subscribed!" className="inputButton"/>
                    </form>
                </div>
            </div>
        </div>
    </div>
);

export default PanaAfricanQuotes;