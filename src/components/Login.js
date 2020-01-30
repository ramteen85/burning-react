import React, {Component} from 'react';

import axios from 'axios';

const URL_USER = 'http://localhost:3000/users.json/' // 'http://10.1.4.76/sessions.json';

class Login extends Component {

  state = {
    name: '',
    password: '',
    logged_in: true
  };

  handleName = event => {
    this.setState({ name: event.target.value });
  }

  handlePassword = event => {
    this.setState({ password: event.target.value });
  }

  login = (userName, pwd) => {
    axios.post(URL_USER, {name: userName, password: pwd})
    .then( res => {
      console.log(res);
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
          <input type="password" onChange={this.handlePassword} />
        </label>
        <input type="submit" value="Login"/>
      </form>
    );
  }
}

export default Login;
