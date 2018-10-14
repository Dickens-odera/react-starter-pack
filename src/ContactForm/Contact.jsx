import React, {Component} from 'react';
import './contact.css';

class Contact extends Component{
    render(){
        return (
            <div className="contactForm-div">
            <div className="form-wrapper">
                <div className="form-group">
                    <input type="text" name="username" id="username-field" placeholder="Enter username"/>
                    </div>
                    <div className="form-group">
                    <input type="email" name="email" id="email-field" placeholder="example@gmail.com"/>
                    </div>
                    <div className="form-group">
                    <textarea name="message" id="message-field" placeholder=""></textarea>
                    </div>
                    <div className="form-group">
                    <input type="submit" value="Save" className="btn btn-success btn-sm"/>
                    </div>
                </div>
                </div>
            
        );
    }
}
export default Contact;