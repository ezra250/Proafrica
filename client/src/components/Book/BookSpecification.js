import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css';
import bookImage from './images/book.png';

const BookSpecification = () => (
    <div className="container bookspecification">
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6">
                <div className="row">
                    <div className="col-md-12">
                        <img src={bookImage} width="650px" className="img-responsive"/>
                    </div>
                    <div className="col-md-12" style={{display:"inline-flex",justifyContent:"center", alignItems:"center"}}>
                        <div className="col-sm-6 col-md-3">
                            <a href="#">
                                <img src={bookImage} alt="Generic placeholder thumbnail" width="200px" className="img-responsive"/>
                            </a>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <a href="#">
                                <img src={bookImage} alt="Generic placeholder thumbnail" width="200px" className="img-responsive"/>
                            </a>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <a href="#">
                                <img src={bookImage} alt="Generic placeholder thumbnail" width="200px" className="img-responsive"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 details">
                <h3 className="text1">We are pleased to introduce to you Pro-Africa</h3>
                <p className="p">
                    <span style={{fontSize: 32, fontWeight: 900,}}> A </span> made in for Africans meetings and notes book.
                    As you are writing your own story, a successful one, allow Pro-Africa to facilitate you record and keep the important moments of your professional life. <br/>
                    From concepts to action plan. Pro Africa meetings and note book is your companion. 
                </p>
                <h3 className="text1"> Features </h3>
                <ol className="list-numbered">
                    <li>a table of content to help you locate and review your work with corresponding page number on each page (160)</li>
                    <li> a monthly planner and a project planner</li>
                    <li> a monthly planner and a project planner</li>
                    <li>on Each of the 160 pages:
                        <ul style={{paddingLeft: 18}}>
                            <li>the meeting date to locate you in time, the subjects to give you space for clearly define your meeting objectives and targets, </li>
                            <li>your minutes of meeting space to record your notes during the meeting,</li>
                            <li>and your actions plan space to bullet points your next moves. </li>
                            <li>On the page footer, we have added an inspirational quotes from great influencers of   Pan Africanism such as Haile Selassie, Chimamanda Ngozi Adichie, Thomas Sakara, Chinua Achebe, Paul Kagame, Wole Soyinka, Kuame Nkruma, Strive Masiyiwa, Patrice Lumumba, Miriam Makeba, Julius Nyerere, Aliko Dangote…. and more</li>
                        </ul>
                    </li>
                </ol>
                <center><p><b>Intelligent thinking in a Rwandan cultural design.</b></p></center>
                <Link to={'/order'} className="btn inputButton" style={{fontSize:13, textDecoration:'none', color:'#fff'}}>Order yours to day</Link>
            </div>
        </div>
    </div>
);

export default BookSpecification;
