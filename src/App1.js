import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoList from './ToDoList'
import AddTask from './AddTask'
import Alert from 'react-bootstrap/Alert'

class App1 extends React.Component {

    constructor(){
        super();
        this.state = {
            todos:[],
            taskText:"",
            duplicationError:"",
        }
    }
    
    changeState=(content)=>{
        let newTodos = this.state.todos.map((item,i)=>{
			if(item.content === content){
                item.state = "DONE";
                return item;
            }
            return item
		})
        // console.log(newTodos);
        this.setState({todos:newTodos})
    }

    Delete=(content)=>{
        let newTodos = this.state.todos.filter(item=>item.content != content)
        // console.log(newTodos);
        this.setState({todos:newTodos})
    }

    
    addTask=(task)=>{
        if(this.state.todos.find(element => element.content === task.content)){
            this.setState({duplicationError:"Task Alreadt exists"})
        }else{
        let newtodolist = this.state.todos;
        task.state="waiting";
        newtodolist.push(task);
        this.setState({todos:newtodolist})
        this.setState({duplicationError:""})
        }
        console.log(this.state.todos);
    }


    render(){
        return(
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <ToDoList todos={this.state.todos} changeState={this.changeState} Delete={this.Delete} />
            <AddTask addTask={this.addTask}/>
            {this.state.duplicationError ? <Alert variant="warning">{this.state.duplicationError}</Alert>:<p></p>}
        </div>
        )
    }
}

export default App1