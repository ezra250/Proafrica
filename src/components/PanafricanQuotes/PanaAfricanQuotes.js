import React,{Component,PropTypes} from 'react';
import { connect } from 'react-redux';

import { getAllQuotes } from '../../action/Quotes';
import './styles.css';
import {quoteURL} from '../../api';
import { PaginationFive } from '../Pagination';

class PanaAfricanQuotes extends Component {

    constructor(props){
        super(props);
    
        this.state = {
            data: props.items,
            pageOfItems: []
        };
        this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    static propType = {
        fetchData: PropTypes.func,
        isLoadingPending: PropTypes.bool,
        isSuccess: PropTypes.bool,
        isErrors: PropTypes.bool,
    }

    componentDidMount(){
        this.props.fetchData('https://api.myjson.com/bins/zl5kp');
        this.setState({
          data: this.props.items
        })
      }

    render(){
        return(
            <div className="container panafrica">
                <div className="col-md-7">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="panel  panel-default col-md-6 panel1">
                                <h3 className="text">Pana African Quotes</h3>
                            </div>
                            {this.props.isSuccess ? this.state.pageOfItems.map((item,id) =>
                                <div className="panel  panel-default col-md-6 pane2" key={id}>
                                    <div><p className="qh">{item[Object.keys(item)[1]]}</p>
                                    <span>{item[Object.keys(item)[2]]}</span></div>
                                </div>
                            ) : null}
                            <PaginationFive
                                items={this.props.items}
                                onChangePage={this.onChangePage}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-md-5 subscribebox">
                    <div className="panel  panel-default col-md-12">
                        <div className="panel-heading"><h3>Hey! Want more free Pana African Quotes? Subscribe to our newsletter!</h3></div>
                        <div className="panel-body">
                            <form>
                                <div className="form-group">
                                    <input type="text" placeholder="Email"/>
                                </div>
                                <input type="submit" value="Get subscribed!" className="inputButton"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
        
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
export default connect(mapStateToProps,mapDispatchToProps) (PanaAfricanQuotes);