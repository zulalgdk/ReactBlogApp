import React, { Component } from 'react'
import NavBar from "./components/NavBar"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Post from "./components/Post"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <NavBar/>
          <Switch>
          <Route exact path ='/'   component={Home}></Route>
          <Route path = '/about'   component={About}></Route>
          <Route path = '/contact' component={Contact}></Route>
          <Route path = '/:post_id' component={Post}></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App
