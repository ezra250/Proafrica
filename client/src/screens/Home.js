import  React from 'react';
import ReactDOM from 'react-dom';

import { Navigation,Jumbotron } from '../components/Header';
import { BookSpecification } from '../components/Book';
import { PanaAfricanQuotes } from '../components/PanafricanQuotes';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

class App extends React.Component{

    constructor(){
        super();

        this.state = {
            IsSelected: false,
            isScrolled : false,
            isHome:true,
            isBookSpec:false,
            isPana:false,
            isContact:false,
            quotes : [],
        };

        this.getOffset = this.getOffset.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleIsSelected = () =>{
        this.setState({
            IsSelected: true
        });
    }

    handleQuotes = () => {
      console.log("help")
    }



    getOffset(element){
        var bounding = element.getBoundingClientRect();
        return {
            top: bounding.top + document.body.scrollTop,
            left: bounding.left + document.body.scrollLeft
          };
      }

    handleScroll(){
        const startElement = ReactDOM.findDOMNode(this.refs.bookspecification); 
        const windowsScrollTop  = window.pageYOffset;
        if(windowsScrollTop >= 549){ 
          //navbar.classList.add("navbar-fixed-top");      
          this.setState({
            isScrolled:true
          })     
        }else{
          //navbar.classList.remove("navbar-fixed-top");   
          this.setState({
            isScrolled:false
          }) 
        }
     }

     componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);        
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
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
                        isScrolled = {this.state.isScrolled}
                        navbarfixed='navbar-fixed-top'
                    />
                </div>
                <div className="bookspecification"  ref='bookspecification'>
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
