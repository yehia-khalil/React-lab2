import React from 'react';
import ReactDOM from 'react-dom';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Button from 'react-bootstrap/Button';
// import FormControl from 'react-bootstrap/FormControl'


class AddTask extends React.Component {

    constructor(){
        super();
        this.state ={
            content:"",
            state:"waiting",

        }
    }



    render(){
        return(
            <div className="input-group mb-3" style={{width:"50%"}}>
                <input type="text" className="form-control" placeholder="ADD NEW TASK HERE" onChange={(e)=>this.setState({content:e.target.value})} value={this.state.content}></input>
                <div className="input-group-append">
                    <button className="btn btn-outline-success" type="button" id="button-addon2" onClick={()=>this.props.addTask(this.state)}>ADD</button>
                </div>
            </div>
        )
    }
}


export default AddTask;