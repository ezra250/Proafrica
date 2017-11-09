import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import ReactDOM from 'react-dom';

import './styles.css';
import bookImage from './images/book.png';

class BookSpecification extends Component{

    constructor(){
        super();

        this.state = {
            IsSelected: false,
            isScrolled : false,
            quotes : [],
        };

        this.getOffset = this.getOffset.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    getOffset(element){
        var bounding = element.getBoundingClientRect();
        return {
            top: bounding.top + document.body.scrollTop,
            left: bounding.left + document.body.scrollLeft
          };
      }

    handleScroll(){
        const navbar = ReactDOM.findDOMNode(this.refs.navbar);
        const startElement = ReactDOM.findDOMNode(this.refs.availability);
        const offset = this.getOffset(startElement)    
        const windowsScrollTop  = window.pageYOffset;
        if(windowsScrollTop >= 1449){ 
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
        const style = {
            position:  'fixed',
            top: 50 + 'px',
        };
        return(
            <div className="bookspecification" ref='bookspecificationAvailable'>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12">
                        <center>
                            <h3 className="text1">We are pleased to introduce to you Pro-Africa</h3>
                            <p className="p" style={{width: 600}}>
                                <span style={{fontSize: 32, fontWeight: 900,}}> A </span> made in for Africans meetings and notes book.
                                As you are writing your own story, a successful one, allow Pro-Africa to facilitate you record and keep the important moments of your professional life. <br/>
                                From concepts to action plan. Pro Africa meetings and note book is your companion. 
                            </p>
                        </center>
                        <div>
                            <div className="col-xs-12 col-sm-12 col-md-6">
                                <img src={bookImage} width="900px" className="img-responsive"/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6">
                                <div>
                                    <center><h3 className="text1">Features</h3></center>
                                    <ol className="list-numbered" >
                                        <li className="alert alert-success">A table of content to help you locate and review your work with corresponding page number on each page (160)</li>
                                        <li  className="alert alert-info">A monthly planner and a project planner</li>
                                        <li  className="alert alert-warning" >On Each of the 160 pages:
                                            <ul style={{paddingLeft: 18}}>
                                                <li style={{paddingTop: 10,paddingBottom: 10}}>The meeting date to locate you in time, the subjects to give you space for clearly define your meeting objectives and targets, </li>
                                                <li>Your minutes of meeting space to record your notes during the meeting,</li>
                                                <li style={{paddingTop: 10,paddingBottom: 10}}>And your actions plan space to bullet points your next moves. </li>
                                                <li>On the page footer, we have added an inspirational quotes from great influencers of   Pan Africanism such as Haile Selassie, Chimamanda Ngozi Adichie, Thomas Sakara, Chinua Achebe, Paul Kagame, Wole Soyinka, Kuame Nkruma, Strive Masiyiwa, Patrice Lumumba, Miriam Makeba, Julius Nyerere, Aliko Dangote…. and more</li>
                                            </ul>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <center className={`${this.state.isScrolled ? "col-xs-12 col-sm-12 col-md-12 availability navbar-fixed-top" : "col-xs-12 col-sm-12 col-md-12 availability"}`}
                         ref='availability' style={this.state.isScrolled ? style : null}>
                            <h3 className="text1" style={{color:'#ffffff',}}>Now available at</h3>
                            <p style={{color:'#ffffff',width: 600, fontWeight: 300, letterSpacing: '0.03cm'}}>Librarie Caritas | Charisam Bookstore (Kigali Heights) | Mumapa Ltd (Airport transit) | SWAV Ltd (MTN Center Nyarutarama) | KDL Gallery (Lemigo Hotel) | Ikirezi Bookstore | or <u><Link to='order' style={{color:'#FFF',}}>Order here</Link></u></p>
                        </center>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookSpecification;
