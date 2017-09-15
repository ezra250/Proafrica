import React, {Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import {submitData} from '../../action/Order'

import './styles.css';
import {} from '../../action/Order';

class OrderForm extends Component{
    constructor(){
        super();

        this.state = {
            errors:{},
            quantity:1,
            name:'',
            email:'',
            phone:'',
            location:'',
            data:{}
        }

        this.handleQuantityChange = this.handleQuantityChange.bind(this);
        this.handlenameChange = this.handlenameChange.bind(this);
        this.handleemailChange = this.handleemailChange.bind(this);
        this.handlelocationChange = this.handlelocationChange.bind(this);
        this.handlephoneChange = this.handlephoneChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleQuantityChange(e){
        this.setState({quantity: e.target.value})
    }

    handlenameChange(e){
        this.setState({name: e.target.value})
    }

    handleemailChange(e){
        this.setState({email: e.target.value})
    }

    handlelocationChange(e){
        this.setState({location: e.target.value})
    }

    handlephoneChange(e){
        this.setState({phone: e.target.value})
    }

    submitForm(e){
        e.preventDefault();
        this.setState({isLoading: true, data: {}, errors: {}})
        this.props.submitData(this.state).then(
            ({data}) => {
                this.setState({
                    isLoading: false,
                    errors:{},
                    quantity:1,
                    name:'',
                    email:'',
                    phone:'',
                    location:'',
                    data
                })
            },
            (data) => {
                this.setState({
                    errors: data.response.data,
                    isLoading: false
                })
            }
        );
    }

    render(){
        const {errors, data} = this.state
        return(
            <div className="container-fluid" style={{background: '#ccc', height: '100%', alignItems:'center'}}>
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <div id="logbox">
                            <div className="alert alert-default" style={{background:'#fafafa', borderStyle:'dotted',borderColor:'#faf', borderWidth:2}}>
                                get yours only for <span style={{fontSize: 20, fontWeight: 900}}>10 000 FRW</span>
                            </div>
                            <form id="signup" onSubmit={this.submitForm}>
                                <h1>Ordering form</h1>
                                <span className="help-block">All fields is required!</span>
                                {data.status === 'success' && <div className="alert alert-success">Your order is successfully submitted, soon we reach you back</div>}
                                <input 
                                    name="quantity" 
                                    type="number" 
                                    placeholder="Quantity" 
                                    onChange={this.handleQuantityChange}
                                    value={this.state.quantity}
                                    className="input pass"/>
                                    {errors.quantity && <span className="help-block" style={{color: 'red'}}>{errors.quantity}</span>}
                                <input 
                                    name="name" 
                                    type="text" placeholder="What's your name?" 
                                    value={this.state.name}
                                    onChange={this.handlenameChange}
                                    className="input pass"/>
                                    {errors.name && <span className="help-block" style={{color: 'red'}}>{errors.name}</span>}
                                <input 
                                    name="email" 
                                    type="text" placeholder="What's your email?" 
                                    value={this.state.email}
                                    onChange={this.handleemailChange}
                                    className="input pass"/>
                                    {errors.email && <span className="help-block" style={{color: 'red'}}>{errors.email}</span>}
                                <input 
                                    name="phone" 
                                    value={this.state.phone}
                                    type="text" placeholder="What's your phone number?" 
                                    onChange={this.handlephoneChange}
                                    className="input pass"/>
                                    {errors.phone && <span className="help-block" style={{color: 'red'}}>{errors.phone}</span>}
                                <input 
                                    name="location"
                                    value={this.state.location}
                                    type="text" placeholder="What's your location?" 
                                    onChange={this.handlelocationChange}
                                    className="input pass"/>
                                    {errors.location && <span className="help-block" style={{color: 'red'}}>{errors.location}</span>}
                                    <input type="submit" value={`${this.state.isLoading ? 'Please wait...' :'Submit'}`} className="btn inputButton" disabled={this.state.isLoading}/>
                            </form>
                        </div>
                </div>
            </div>
        </div>
        );
    }
} 

export default connect(null,{submitData})(OrderForm);