import React, {Component} from 'react';

import axios from 'axios';

const URL = 'http://localhost:3000/users.json';

class Login extends Component {

  state = {
    name: '',
    password: '',
    logged_in: false
  };

  handleName = event => {
    this.setState({ name: event.target.value });
  }

  handlePassword = event => {
    this.setState({ password: event.target.value });
  }

  login = (userName, pwd) => {
    axios.post(URL, {name: userName, password: pwd})
    .then( res => {
      this.setState({ logged_in: res })
    })
    .catch( err => console.warn(err));

    if (this.state.logged_in) {
      const route = '/search';
      this.props.history.push(route);
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.login(this.state.name, this.state.password);
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" onChange={this.handleName} />
        </label>
        <label>
          Password:
          <input type="text" onChange={this.handlePassword} />
        </label>
      </form>
    );
  }
}

export default Login;
