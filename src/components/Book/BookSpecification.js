import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css';
import bookImage from './images/book.png';

const BookSpecification = () => (
    <div className="container bookspecification">
        <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-8">
                <img src={bookImage} width="450px"/>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 details">
                <h3 className="text1">What is Lorem Ipsum?</h3>
                <p className="p">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <Link to={'/order'} className="inputButton" style={{textAlign:'center', paddingTop:12, fontSize:13, textDecoration:'none', color:'#fff'}}>Order yours to day</Link>
            </div>
        </div>
    </div>
);

export default BookSpecification;
