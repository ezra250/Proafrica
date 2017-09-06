import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';

import { getAllQuotes } from '../../action/Quotes';
import './styles.css';
import { Pagination } from '../Pagination';
import range from 'lodash.range';

class SmallHeader extends Component {

    render(){
        return(
            <div className="smallheader row">
                <div className="banner col-xs-12 col-sm-6 col-md-3">
                    <div className="content"></div>
                </div>
                <div className="showcase col-xs-12 col-sm-6 col-md-9">
                    <div className="container ">
                        <div className="quotes"> </div>
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