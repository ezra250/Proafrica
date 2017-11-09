import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

class Navigation extends React.Component{
    constructor(){
      super();      
    }
    static proptypes = {
        isSelected: PropTypes.bool,
        isScrolled: PropTypes.bool,
        bottom: PropTypes.bool,
        navbarfixed: PropTypes.string,
    }

    render(){
        return(
            <nav ref='navbar' className={`${this.props.bottom ?
             'navbar navbar-default navbar-fixed-bottom' : 
             this.props.isScrolled ? this.props.navbarfixed+" "+ "navbar navbar-default " : "navbar navbar-default "}`}>
                {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#"></a>
                </div>

                {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li className={`${this.props.isSelected ? "current" : null}`} onClick={this.props.isSelected} onMouseOver={this.props.isSelected}><Link to={'/'}>Home</Link></li>
                        <li className={`${this.props.isSelected ? "current" : null}`} onClick={this.props.isSelected} onMouseOver={this.props.isSelected}><Link to={'/#panaafican'}>Panfrican Quotes</Link></li>
                        <li className={`${this.props.isSelected ? "current" : null}`} onClick={this.props.isSelected} onMouseOver={this.props.isSelected}><Link to={'/#contactus'}>Contact us</Link></li>
                        <li className={`${this.props.isSelected ? "current" : null}`} onClick={this.props.isSelected} onMouseOver={this.props.isSelected}><Link to={'/'}>Get ProAfrica Notebook</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navigation;
