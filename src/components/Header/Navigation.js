import React, {PropTypes} from 'react';

import './styles.css';

class Navigation extends React.Component{
    static proptypes = {
        isSelected: PropTypes.bool,
        isScrolled: PropTypes.bool,
    }
    render(){
        return(
            <nav className="navbar navbar-default" >
                <div className="container">
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
                            <li className={`${this.props.isSelected ? "current" : null}`} onClick={this.props.isSelected} onMouseOver={this.props.isSelected}><a href="#">Home</a></li>
                            <li className={`${this.props.isSelected ? "current" : null}`} onClick={this.props.isSelected} onMouseOver={this.props.isSelected}><a href="#">Contact us</a></li>
                            <li className={`${this.props.isSelected ? "current" : null}`} onClick={this.props.isSelected} onMouseOver={this.props.isSelected}><a href="#">Get ProAfrica Notebook</a></li>
                        </ul>
                    </div>
                    </div>
                </nav>  
        )
    }
}

export default Navigation;