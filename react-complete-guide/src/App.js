import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = { isLoggedIn: true}
  }
  render() {
    return(
      <div>
        <h1>Your are currently logged in(yes/no)</h1>
        <p>{this.state.isLoggedIn ? "Yes" : "No"}</p>
      </div>
    )
  }
}
export default App;