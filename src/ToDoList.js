import React from 'react';
import ReactDOM from 'react-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import ListComp from './ListComp'

class ToDoList extends React.Component {



    render(){
        return(
            <div>

            <Card style={{ width: "50%" }}>
                <Card.Header>To Do List</Card.Header>
                <ListGroup variant="flush">
                {this.props.todos.map((todo,i)=>{
                    return <ListComp key={i} todo={todo} changeState={this.props.changeState} Delete={this.props.Delete} />
                })}
                </ListGroup>
            </Card>
            </div>
        )
    }
}


export default ToDoList;