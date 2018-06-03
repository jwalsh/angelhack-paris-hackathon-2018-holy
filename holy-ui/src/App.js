import React, {Component} from 'react';
import {Switch, Route} from 'react-router';
import {BrowserRouter as Router} from 'react-router-dom'
import {Admin} from './routes/Admin.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Admin} />
          <Route path='/owner' component={Admin} />
          <Route path='/owner/homeid' component={Admin} />
          <Route path='/owner/events' component={Admin} />
          <Route path='/builder' component={Admin} />
          <Route path='/insurance' component={Admin} />
      </Switch>
      </Router>
    );
  }
}

export default App;
