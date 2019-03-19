import React, { Component } from "react"

class App extends Component {
  constructor() {
    super()
    this.state = {
      "firstname": '',
      "lastname": ''
    }
    this.onChangeHandler = this.onChangeHandler.bind(this)
  }

  onChangeHandler(event) {

    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="firstname">First Name :</label>
          <input type="text" name="firstname" onChange={this.onChangeHandler} />
          <label htmlFor="lastname">Last Name :</label>
          <input type="text" name="lastname" onChange={this.onChangeHandler} />
        </form>
        <p>{this.state.firstname}, {this.state.lastname} </p>
      </div>
    )
  }
}

export default App
