import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Message from './components/Message'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Yet another TODO App</h2>
          <h3>React, Redux, React Router</h3>
        </div>
        <Router>
          <div className="Todo-App">
            <Message />
            <TodoForm />
            <Route 
              path='/:filter?' 
              render={({match}) => (<TodoList filter={match.params.filter} />)}>
            </Route>
            <Footer></Footer>
          </div>
        </Router>
        </div>
    );
  }
}

export default App
