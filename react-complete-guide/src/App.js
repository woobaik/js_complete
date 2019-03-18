import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [{ name: 'Haram', age: 29 }, { name: 'Joungwoo', age:33 }, { name: 'Kim', age: 40 }]
  };

  switchNameHander = () => {
    this.setState({name: "Haram Kim!!@@!!"})
  }
    

  render() {
    const peopleGenerator = (
      this.state.people.map((person, i) => {
        return (<Person name={person.name} age={person.age} />)
      })
    );  

    return (
      <div className="App">
        <button onClick={this.switchNameHander}>Change Name</button>
          {peopleGenerator}
      </div>
    );
  }
}

export default App;
