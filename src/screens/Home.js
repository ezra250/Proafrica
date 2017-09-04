import  React from 'react';

import { Navigation,Jumbotron } from '../components/Header';
import { BookSpecification,BookOrder } from '../components/Book';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

class App extends React.Component{

    constructor(){
        super();

        this.state = {
            IsSelected: false,
            isScrolled : false
        };
    }

    handleIsSelected = () =>{
        this.setState({
            IsSelected: true
        })
    }

    handleOnScroll = () => {
        this.setState({
            isScroll: window.onscroll ? true : false,
        })
    }

    render(){
        return(
            <div>
                <div className="slideContainer">
                    <Jumbotron/>
                </div>
                <div className="topMenus">
                    <Navigation
                        IsSelected = {this.handleIsSelected.bind(this)}
                        isScroll = {this.handleOnScroll.bind(this)}
                    />
                </div>
                <div className="bookspecification">
                    <BookSpecification/>
                </div>
                <div className="bookOrdering">
                    <BookOrder/> 
                </div>
                <div className="contactform">
                    <Contact/>
                </div>
                <div className="footerBox">
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default App;