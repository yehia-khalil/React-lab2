import React from 'react';
import ReactDOM from 'react-dom';
import UserComp from './UserComp';



class UserList extends React.Component{

    constructor(){
        super();
        this.state={
            users:[],
            loading:false
        };
    }

    async componentDidMount(){
        this.setState({loading:true});
        let res= await fetch("https://reqres.in/api/users?page=2",{
            method:"GET",
            headers:{
                "content-type":"application/json"
            }
        });
        let resJson = await res.json();
        this.setState({users:resJson.data,loading: false});
 
    }

    render(){
        return <div class="row row-cols-1 row-cols-md-3">
            {!this.state.loading ? this.state.users.map((item)=>{
                return <UserComp key={item.id}  user={item} />
            }): "Loading Users"}
        </div>
    }
}

export default UserList;