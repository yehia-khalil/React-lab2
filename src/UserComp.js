import React from 'react';
import ReactDOM from 'react-dom';



class UserComp extends React.Component{
    constructor(){
        super();
        
    }

    render(){
        return (
            
            <div className="col mb-4">
            <div className="card">
                <img src={this.props.user.avatar} class="card-img-top" alt="..."></img>
                <div className="card-body">
                <h5 className="card-title">{this.props.user.first_name} {this.props.user.last_name}</h5>
                <p className="card-text">T{this.props.user.email}</p>
                </div>
            </div>
            </div>
        )
    }
}

export default UserComp;