import React, {Component} from 'react';
import './contact.css';

class Contact extends Component{
    render(){
        return (
            <div className="contactForm">
                <div className="form-group">
                    <input type="text" name="username" id="username-field" placeholder="Enter username"/>
                    <input type="email" name="email" id="email-field" placeholder="example@gmail.com"/>
                    <textarea name="message" id="message-field" placeholder=""></textarea>

                </div>
            </div>
        );
    }
}
export default Contact;