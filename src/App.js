import React, { Component } from 'react'

import './App.css'
import Main from './Main'

class App extends Component {
  state = {
    user: {
      uid: '85948549',
      userName: 'nikita',
      email: 'ngerard@purdue.edu',
    }
  }
  render() {
    return (
      <div className="App">
        <Main user={this.state.user}/>
      </div>
    )
  }
}

export default App;
