import React, {Component,PropTypes} from 'react';
import { connect } from 'react-redux';

import logo from './image/logo.png';
import './styles.css';
import { Pagination } from '../Pagination';
import range from 'lodash.range';
import {getAllQuotes} from '../../action/Quotes';
import {reducer} from '../../reducers/reducerQuotes';
import {QuotesUI} from '../QuotesUI'

class Jumbotron extends Component {

  constructor(props){
    super(props);

    this.state = {
      quotes: [],
      pageOfItems: [],
      email: ''
    };
    this.onChangePage = this.onChangePage.bind(this);
  }

  static propType = {
    fetchData: PropTypes.func,
    isLoadingPending: PropTypes.bool,
    isSuccess: PropTypes.bool,
    isErrors: PropTypes.bool,
  }

  onChangePage(pageOfItems) {
      // update state with new page of items
      this.setState({ pageOfItems: pageOfItems });
  }

  componentDidMount(){
    this.props.getAllQuotes().then(
      ({data}) => {
        this.setState({
          quotes: data,
        })
      },
      () => {}
    );
  }

  render(){
    const {quotes} = this.state;
    console.log(quotes)
    return (
        <div className="jumbotron row">
           <div className="banner col-xs-12 col-sm-12 col-md-3">
               <h2>MEETING BOOK</h2>
               <img src={logo} width="200px"/>
               <div className="content">
                <p className="proverb">"Until, the lion tell my side of the story the tale of the hunt will always glorify the hunter"</p>
                <p className="author">African Proverb</p>
               </div>
           </div>
           <div className="showcase col-xs-12 col-sm-12 col-md-9">
              <div className="container ">
                {this.props.isLoadingPending ? <span>loading...</span> : null}
                <div className="quotes">
                  <h3>The Quote of the day</h3>
                  <blockquote>
                  {this.state.pageOfItems.map((item,id) => (
                    <p key={id}>
                        {item[Object.keys(item)[1]]}
                        <span>{item[Object.keys(item)[2]]}</span>
                    </p>
                  ))}
                  </blockquote>
                  <Pagination
                    items={quotes}
                    onChangePage={this.onChangePage}
                  />
                </div>
              </div>
           </div>
        </div>
    );
  }
}

export default connect(null,{getAllQuotes}) (Jumbotron);
