import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Game from './components/Game'
import Home from './components/Home'
import Navbar from './components/Navbar';

class App extends Component {
  render () {
    return (
      <>
        <Router>
          <div>
            <Navbar/>  
            <Route exact path='/' component={Home} />
            <Route path='/myclickygame' component={Home} />
            <Route path='/game' component={Game} />
          </div>
        </Router>
      </>
    )
  }
}

export default App
