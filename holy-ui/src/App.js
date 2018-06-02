import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom'
import { Owner } from './routes/Owner.jsx';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' render={ () => {
            <Redirect to='/owner' />
            }} />
          <Route path='/owner' component={Owner} />
      </div>
      </Router>
    );
  }
}

export default App;
