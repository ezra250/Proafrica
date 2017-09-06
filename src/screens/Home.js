import  React from 'react';

import { Navigation,Jumbotron } from '../components/Header';
import { BookSpecification,BookOrder } from '../components/Book';
import { PanaAfricanQuotes } from '../components/PanafricanQuotes';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

class App extends React.Component{

    constructor(){
        super();

        this.state = {
            IsSelected: false,
            isScrolled : false,
            quotes : [],
        };
    }

    handleIsSelected = () =>{
        this.setState({
            IsSelected: true
        });

        this.handleQuotes = this.handleQuotes.bind(this)
    }

    handleOnScroll = () => {
        this.setState({
            isScroll: window.onscroll ? true : false,
        })
    }

    handleQuotes = () => {
      console.log("help")
    }

    render(){
        return(
            <div>
                <div className="slideContainer">
                    <Jumbotron
                      randomQuotes={this.handleQuotes}
                    />
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
                <div className="bookOrdering" id="panaafican">
                    <PanaAfricanQuotes />
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
