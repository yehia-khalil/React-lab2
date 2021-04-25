import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
    style={
        backgroundColor:"yellow",
        border:"2px solid black",
        width: "40px",
        margin:"auto",
        padding:"10px",
        textAlign: "center",
        marginTop:"50px",
    }
    style2={
        width: "80px",
        margin:"auto",
        padding:"10px",
        textAlign: "center",

    }

    constructor(){
        super();
        this.state = {
            InitialCount : 0,
        }
    }

    increase= () =>{
        this.setState({InitialCount:this.state.InitialCount+1})
    }

    decrease= () =>{
        this.setState({InitialCount:this.state.InitialCount-1})
    }

    render(){
        return(
        <div>
            <h1 style={this.style}>{this.state.InitialCount}</h1>
            <div style={this.style2}>
                <button onClick={this.increase}>ADD</button>
                <button onClick={this.decrease}>SUBTRACT</button>
            </div>
        </div>
        )
    }
}

export default Counter;