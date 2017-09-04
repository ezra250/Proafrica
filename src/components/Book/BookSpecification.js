import React from 'react';

import './styles.css';

const BookSpecification = () => (
    <div className="container bookspecification">
        <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-8"></div>
            <div className="col-xs-12 col-sm-6 col-md-4 details">
                <h2><span className="text1">Pro</span><span className="text2"> Africa</span> Specification</h2>
                <hr></hr>
                <div className="content">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <button className="btn btn-default">Order Now for 10,000 Frw only</button>
                </div>
            </div>
        </div>
    </div>
);

export default BookSpecification;