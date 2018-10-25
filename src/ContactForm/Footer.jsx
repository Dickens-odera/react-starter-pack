import React, {Component} from 'react';

class Footer extends Component{
    render(){
        return(
            <div className="footer-container">
            <div className="container-fluid">
        <div className="row" id="sub-container">
            <div className="col-md-4 col-sm-offset-4">
                <div className="contact-info">
                    <h4 className="heading">
                    About Us
                    </h4>
                    <p className="about-info">We are comitted towards ensuring that we server you the best we can</p>
                 </div>

            </div>
            <div className="col-md-4 col-sm-offset-4">
                Our location
            </div>
            <div className="col-md-4 col-sm-offset-4">
                We are social
                </div>
        </div>
            </div>
            </div>
        );
    }
}

export default Footer;