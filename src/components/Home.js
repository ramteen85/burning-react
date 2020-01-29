import React, { Component } from 'react';

import {
  Link,
  Route,
  HashRouter as Router
} from 'react-router-dom';

class Home extends Compoenent {
  render() {
    return (
      <div>
        <Router>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Registration} />
          <Route exact path
        </Router
      </div>
    )
  }
}

export default Home;
