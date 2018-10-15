import React, {Component} from 'react';

class Info extends Component{
    render(){
        return(
            <div className="main-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        
                    </div>
                    <div className="col-md-8">
                    <div className="info-div">
                        <form>
                                    <input type="search" name="search" className="form-control"/>
                                    <button className="btn btn-primary btn-sm">
                                        Search
                                    </button>
                                
                        </form>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                    </div>
            </div>
            </div>
        );
    }
}
export default Info;