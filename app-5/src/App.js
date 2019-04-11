import React, { Component } from 'react'
import Image from './components/Image'
import './App.css'

class App extends Component {
  state = {
    url: 'https://http.cat/599',
    alt: '599 error'
  }
  render() {
    return (
      <div className="App">
        <Image />
      </div>
    )
  }
}

export default App
