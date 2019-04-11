import React, { Component } from 'react'
import './App.css'

class App extends Component {
  handleInput(e) {
    this.setState({
      input: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <input onChange={(e) => this.handleInput(e)} />
        <h1>{this.state.input}</h1>
      </div>
    )
  }
}

export default App
