import React from 'react';
import ReactDOM from 'react-dom';
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class ListComp extends React.Component {



    render(){
        return(
            <div>
                <ListGroup.Item style={this.props.todo.state==="DONE" ? {backgroundColor:"yellow"}:{}}>
                    <Container >
                        <Row>
                            <Col sm={4}>{this.props.todo.content}</Col>
                            <Col sm={8}>
                            <div style={{display:'flex' ,justifyContent:"flex-end"}}>
                                <Button variant="outline-success" onClick={()=>this.props.changeState(this.props.todo.id)}>Done</Button>{' '}
                                <p style={{width:"10px"}}></p>
                                <Button variant="outline-danger" onClick={()=>this.props.Delete(this.props.todo.id)}>Delete</Button>{' '}
                            </div>
                            </Col>
                        </Row>  
                    </Container>
                </ListGroup.Item>
            </div>
        )
    }
}


export default ListComp;