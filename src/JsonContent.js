import React from 'react';
import ReactDOM from 'react-dom';

class JsonContent extends React.Component {

    style={
        border:"2px solid black",
        width: "250px",
        margin:"auto",
        padding:"10px",
        textAlign: "center",
        marginTop:"50px",
    }

    constructor(props){
        super();
        // console.log(typeof JSON.parse(this.data));
        this.state = JSON.parse(props.dataa)
    }


    render(){
        return(
            <div style={this.style}>
                <p>Name : {this.state.preferredFullName}</p>
                <p>Code : {this.state.employeeCode}</p>
                <p>Region : {this.state.region}</p>
                <p>Phone : {this.state.phoneNumber}</p>
                <p>Email : {this.state.emailAddress}</p>
            </div>
        )
    }
}

export default JsonContent;