import React from 'react';
import ReactDOM from 'react-dom';



class Login extends React.Component{
    
    constructor(){
        super();
        this.state={
            username:"",
            email:"",
            password:""
        }
    }


    login=async ()=>{
        let user = {
            email:this.state.email,
            password:this.state.password
        }
        let res= await fetch("https://reqres.in/api/login",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(user)
        });
        let resJson = await res.json();
        if(resJson.token){
            this.props.login();
            alert("Login success");

        }else{
            alert(resJson.error)
        }
    }

    render(){
        return <div>
            

                <div className="form-group">
                    <label for="exampleInputUsername">username</label>
                    <input type="text" className="form-control" id="exampleInputUsername" value={this.state.username} onChange={(e)=>this.setState({username:e.target.value})} name="username"></input>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} name="email"></input>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})} name="password"></input>
                </div>
                
                <button onClick={this.login} className="btn btn-primary">Submit</button>
                
        </div>
    }
}


export default Login;