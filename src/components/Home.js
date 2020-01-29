import React, { Component } from 'react';
import Login from './Login';
import Flight from './Flight';
import SearchFlights from './SearchFlights'
import Registration from './Registration'

import {
  Link,
  Route,
  HashRouter as Router
} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <Router>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>


          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Registration} />
          <Route exact path="/search" component={SearchFlights} />
          <Route exact path="/flights/:id" component={Flight} />
        </Router>
      </div>
    );
  }
}

export default Home;
