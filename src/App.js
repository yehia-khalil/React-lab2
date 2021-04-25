import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './Counter';
import JsonContent from './JsonContent';

class App extends React.Component {

  data = `{"id":"1",
  "jobTitleName":"Developer",
  "firstName":"Ahmed",
  "lastName":"Ali",
  "preferredFullName":"Ahmed Ali",
  "employeeCode":"E1",
  "region":"CA",
  "phoneNumber":"408-1234567",
  "emailAddress":"ahmed.ali@gmail.com"}`

  constructor(){
    super();
    this.state = {
      data:this.data
    }
  }

  render(){
    return(
      <div>
      <Counter />
      <JsonContent dataa={this.state.data}/>
      </div>
    )
  }
}

export default App