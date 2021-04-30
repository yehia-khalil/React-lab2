import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import App1 from './App1';
import Login from './Login';
import UserList from './UserList';

class App extends React.Component {

    constructor(){
        super();
        this.state = {
            loggedin:false,
        }
    }

    login=()=>{
        console.log("logged");
        this.setState({loggedin:true});
    }

    render(){
        return(
            <Router>
                <div>
                    <NavBar loggedin={this.state.loggedin} />
                    <Switch>
                        <Route path="/todo">
                            <div className="container mt-5">
                                <App1 />
                            </div>
                        </Route>
                        <Route path="/users">
                            <div className="container mt-5">
                                <UserList />
                            </div>
                        </Route>
                        <Route path="/">
                            <div className="container mt-5">
                                <Login login={this.login} />
                            </div>
                        </Route>
                        
                        
                    </Switch>
                
                </div>
            </Router>
        )
    }
}

export default App