import React from 'react';

import './styles.css';

const Jumbotron = () => (
    <div className="jumbotron row">
       <div className="banner col-xs-12 col-sm-6 col-md-3">
           <h2>MEETING BOOK</h2>
           <img src="http://www.clker.com/cliparts/b/o/c/G/Q/b/africa-outline-hi.png" width="200px"/>
           <div className="content">
            <p className="proverb">"Until, the lion tell my side of the story the tale of the hunt will always glorify the hunter"</p>
            <p className="author">African Proverb</p>
           </div>
       </div>
       <div className="showcase col-xs-12 col-sm-6 col-md-9"></div>
    </div>
);

export default Jumbotron;