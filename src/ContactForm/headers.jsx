import React, {Component} from 'react';

class Header extends Component{
    render(){
        return(
            <div className="header">
                <div className="container-fluid">
                    <div className="navbar navbar-inverse navbar-fixed-top nabvbar-dark bg-dark" role="navigation">
                            <button className="navbar-toggler" data-toggle="collapse" data-target="#collapssable-navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            </button> 
                            <a className="navbar-brand" href="index.php">Tujiajiri <span className="nav-bar-text-seprarate">Software Solutions</span></a>

                    </div>
                <div className="collapse navbar-collapse" id="collapssable-navbar">
                    <ul className="nav navbar-nav pull-left">
                        <li className="nav-item"><a href="login.html">Login</a></li>
                    </ul>
                </div>
                </div>
            </div>
        );
    }
}
export default Header;