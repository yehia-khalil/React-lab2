import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoList from './ToDoList'

class App extends React.Component {

    constructor(){
        super();
        this.state = {
            todos:[{
                id:1,
                content:"to-do 1",
                state:"waiting"
            },{
                id:2,
                content:"to-do 2",
                state:"waiting"
            },{
                id:3,
                content:"to-do 3",
                state:"waiting"
            }],
        }
    }
    
    changeState=(id)=>{
        let newTodos = this.state.todos.map((item,i)=>{
			if(item.id === id){
                item.state = "DONE";
                return item;
            }
            return item
		})
        // console.log(newTodos);
        this.setState({todos:newTodos})
    }

    Delete=(id)=>{
        let newTodos = this.state.todos.filter(item=>item.id != id)
        console.log(newTodos);
        this.setState({todos:newTodos})
    }

    render(){
        return(
        <div>
            <ToDoList todos={this.state.todos} changeState={this.changeState} Delete={this.Delete} />
        </div>
        )
    }
}

export default App