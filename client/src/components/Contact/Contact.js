import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import './styles.css';
import {submitData} from '../../action/Contactus'

class Contact extends Component{

    constructor(props){
        super(props);

        this.state = {
            name: '',
            email:'',
            message:'',
            errors:'',
            data: {},
        }
        this.submitForm = this.submitForm.bind(this);
        this.handleNamechange = this.handleNamechange.bind(this);
        this.handleemailchange = this.handleemailchange.bind(this);
        this.handlemessage = this.handlemessage.bind(this);
    }


    static propType = {
        submitData: PropTypes.func.isRequired,
    }

    submitForm(e){
        e.preventDefault();
        this.setState({isLoading: true, data: {}, errors: {}})
        this.props.submitData(this.state).then(
            ({data}) => {
                this.setState({
                    isLoading: false,
                    name:'',
                    email:'',
                    message:'',
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

    handleNamechange(e){
        this.setState({
            name: e.target.value,
        })
    }

    handleemailchange(e){
        this.setState({
            email: e.target.value,
        })
    }

    handlemessage(e){
        this.setState({
            message: e.target.value,
        })
    }

    render(){
        const {errors, data} = this.state
        return(
            <div className="container-fluid contact">
                <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <div id="logbox">
                    {data.status === 'success' && <div className="alert alert-success">Thank you we are happy to hearing from you</div>}
                        <form id="signup" onSubmit={this.submitForm}>
                            <h1>Talk to us</h1>
                            <input 
                                name="name" 
                                type="text" 
                                onChange={this.handleNamechange}
                                value={this.state.name}
                                placeholder="What's your name?" 
                                className="input pass"/>
                                {errors.name && <span className="help-block" style={{color: 'red'}}>{errors.name}</span>}
                            <input 
                                name="email" 
                                type="email"
                                value={this.state.email}
                                onChange={this.handleemailchange}
                                placeholder="What's your email?"
                                className="input email"/>
                                {errors.email && <span className="help-block" style={{color: 'red'}}>{errors.name}</span>}
                            <textarea 
                                name="message" 
                                value={this.state.message}
                                placeholder="Message"
                                onChange={this.handlemessage}
                                className="input pass"></textarea>
                                {errors.message && <span className="help-block" style={{color: 'red'}}>{errors.name}</span>}
                            <input type="submit" value={`${this.state.isLoading ? 'Please wait...' :'Submit'}`} className="btn inputButton" disabled={this.state.isLoading}/>
                        </form>
                    </div>
               </div>
                </div>
            </div>
        );
    }
} 

export default connect(null, {submitData}) (Contact);
