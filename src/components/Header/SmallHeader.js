import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';

import { getAllQuotes } from '../../action/Quotes';
import './styles.css';
import { Pagination } from '../Pagination';
import range from 'lodash.range';

class SmallHeader extends Component {

    constructor(props){
        super(props);
    
        this.state = {
            data: props.items,
            pageOfItems: []
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
        this.props.fetchData('https://api.myjson.com/bins/zl5kp');
        this.setState({
          data: this.props.items
        })
        //  https://api.myjson.com/bins/zl5kp
        // http://5826ed963900d612000138bd.mockapi.io/items
      }
    render(){
        return(
            <div className="smallheader row">
                <div className="banner col-xs-12 col-sm-6 col-md-3">
                    <div className="content">
                    {/* <p className="proverb">"Until, the lion tell my side of the story the tale of the hunt will always glorify the hunter"</p>
                    <p className="author">African Proverb</p> */}
                    </div>
                </div>
                <div className="showcase col-xs-12 col-sm-6 col-md-9">
                    <div className="container ">
                        <div className="quotes">
                        {/* <h3>Order ProAfrica's notebook today</h3> */}
                        {/* <blockquote> */}
                            {/* {this.props.isSuccess ? this.state.pageOfItems.map((item,id) =>
                                <p key={id}>
                                    {item[Object.keys(item)[1]]}
                                    <span>{item[Object.keys(item)[2]]}</span>
                                </p>
                            ) : null} */}
                        {/* </blockquote> */}
                        <Pagination
                            items={this.props.items}
                            onChangePage={this.onChangePage}
                        />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
      isLoadingPending : state.isLoadingPending,
      isSuccess : state.isSuccess,
      isErrors : state.isErrors,
      items: state.items
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
      return {
          fetchData: (url) => dispatch(getAllQuotes(url))
      };
  };

export default connect(mapStateToProps,mapDispatchToProps) (SmallHeader);