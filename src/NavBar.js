import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


class NavBar extends React.Component {



    render(){
        return(
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <div className="nav-link"> <Link to="/">Home</Link> </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link"><Link to="/todo">To-do-list</Link></div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link"><Link to="/users">Users</Link></div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link">{this.props.loggedin ? "logged in User" : "not logged in"}</div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}


export default NavBar;