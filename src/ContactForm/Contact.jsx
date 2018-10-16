import React, {Component} from 'react';
import './contact.css';
class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
            username :'',
            email :'',
            message :''

        }
    }
    componentWillMount(){
        //this.setState({[this.state.username]:this.target.value})
        console.log(1611); 
    }
    render(){
        return (
            <div className="contact-form">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-xs-4 ">
                    </div>
                    <div className="col-md-4 col-xs-4 ">
                    <div className="brand">
                        <h3 className="text-center responsive bg-bright header-text" id="msg-div">Contact Us</h3>
                    </div>
                        <form className="form-group" action="">
                            <div className="form-group">
                                <input type="text" name="username" placeholder="Enter username" className="form-control" id="username"
                                value={this.state.username}
                                />
                            </div>
                            <div className="form-group">
                                    <input type="email" name="email" placeholder="example@gmail.com" className="form-control form-field" id="email"
                                        value={this.state.email}
                                    />                            </div>
                            <div className="form-group">
                                    <textarea name="message" className="form-control" placeholder="Enter your message here" id="message"
                                    value={this.state.message}>
                                   
                                    </textarea>
                            </div>
                            <div className="form-group">
                                    <input type="submit" value="SEND" className="btn btn-success btn-lg" id="btn-msg"/>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4 col-xs-4 responsive">
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Contact;