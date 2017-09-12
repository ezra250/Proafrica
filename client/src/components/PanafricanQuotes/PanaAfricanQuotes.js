import React,{Component,PropTypes} from 'react';
import { connect } from 'react-redux';

import { submitData } from '../../action/Subscribers';
import './styles.css';
import { PaginationFive } from '../Pagination';
import {reducer} from '../../reducers/reducerQuotes';
import {Subscribers} from '../../reducers/Subscribers';
import {getAllQuotes} from '../../action/Quotes';

class PanaAfricanQuotes extends Component {

    constructor(props){
        super(props);
    
        this.state = {
            quotes: [],
            pageOfItems: [],
            email: '',
            errors: {},
            success:false
          };
        this.onChangePage = this.onChangePage.bind(this);
        this.onSubmitEmail = this.onSubmitEmail.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
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

    static propType = {
        getAllQuotes: PropTypes.func.isRequired,
        submitData: PropTypes.func.isRequired,
        isLoadingPending: PropTypes.bool,
        isSuccess: PropTypes.bool,
        isErrors: PropTypes.bool,
    }
    
    onSubmitEmail(e){
        e.preventDefault();
        this.setState({errors: {}, success: false})
        this.props.submitData(this.state)
        .then(
            ({data}) => {
                this.setState({
                    success: data.success,
                    email: ''
                })
            },
            (data) => {
                this.setState({errors: data.response.data})
            }
        );
    }

    onChangeEmail(e){
        this.setState({
            email : e.target.value
        })
    }

    render(){
        const{errors} = this.state;
        return(
            <div className="container panafrica">
                <div className="col-md-7">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 ">
                            <div className="panel panel1">
                                <div className="panel-body">
                                    <h3 className="text">Pana African Quotes</h3>
                                </div>
                            </div>
                            {this.state.pageOfItems.map((item,id) =>
                                <div className="col-xs-12 col-md-4 col-sm-12 panel2"  key={id}>
                                    <div className="panel">
                                        <div className="panel-body"><p className="qh">{item[Object.keys(item)[1]]}</p>
                                        <span>{item[Object.keys(item)[2]]}</span></div>
                                    </div>
                                </div>
                            )}
                            <PaginationFive
                                items={this.state.quotes}
                                onChangePage={this.onChangePage}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-md-5 subscribebox">
                    <div className="panel  panel-default col-md-12">
                        <div className="panel-heading"><h3>Hey! Want more free Pana African Quotes? Subscribe to our newsletter!</h3></div>
                        <div className="panel-body">
                            {this.state.success && <div className="alert alert-success">Thank you for subscribing, we will contact you soon</div>}
                            <form>
                                <div className={`${errors.email ? "group-form has-error" : "form-group"}`}>
                                    <input type="text" placeholder="Email" name='email' 
                                        onChange={this.onChangeEmail}
                                        value={this.state.email}
                                    />
                                    {errors.email && <span className="help-block">{errors.email}</span>}
                                </div>
                                <input type="submit" value={`${this.props.isLoadingPending ? "Submitting..." : "Get subscribed!"}`} className="btn inputButton" onClick={this.onSubmitEmail}/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
        
    }
}
export default connect(null,{getAllQuotes,submitData}) (PanaAfricanQuotes);