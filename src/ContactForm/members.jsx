import React, {Component} from 'react';

class Members extends Component{
    constructor(props){
        super(props);
        this.state = {
            counter:0,
            message :''

        }
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-3"></div>
                    <div className="col-xs-6">
                        <button className="btn btn-success btn-lg">+</button>
                    </div>
                    <div className="col-xs-3"></div>

                </div>
            </div>
        );
    }
}

export default Members;