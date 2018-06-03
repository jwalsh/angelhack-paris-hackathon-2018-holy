import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router';
import {BrowserRouter as Router} from 'react-router-dom'
import {Admin} from './routes/Admin.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={() => (
              <Redirect to='/owner'/>
            )}/>
            <Route path='/owner' component={Admin}/>
          <Route path='/owner/homeid'/>
          <Route path='/owner/events'/>
          <Route path='/builder'/>
          <Route path='/insurance'/>
      </Switch>
      </Router>
    );
  }
}

export default App;
