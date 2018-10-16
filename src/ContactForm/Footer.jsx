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
                    <p className="about-info">We are comitted to ensuring that we server you the best we can</p>
                 </div>

            </div>
            <div className="col-md-4 col-sm-offset-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt quaerat saepe cupiditate facilis consectetur libero ex molestias. Nisi accusamus, repellat velit quo aliquam placeat fuga! Voluptatum sequi dolor numquam ipsum!

            </div>
            <div className="col-md-4 col-sm-offset-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita adipisci perspiciatis voluptates. Libero aliquid quidem sit labore dolorem non, quod consequuntur praesentium incidunt inventore veniam facere eligendi consequatur! Maxime, ratione!

                </div>
        </div>
            </div>
            </div>
        );
    }
}

export default Footer;