import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom'
import { Admin } from './routes/Admin.jsx';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' render={ () => {
            <Redirect to='/admin' />
            }} />
          <Route path='/admin' component={Admin} />
      </div>
      </Router>
    );
  }
}

export default App;
