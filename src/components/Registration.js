
  import React, {Component} from 'react';

  class Registration extends Component {
    constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      comfirmed_password: ''
    }
  }

  handleName = event => {
    this.setState({name:event.target.value});
  }

  handlePwd = event => {
    this.setState({password:event.target.value});
  }

  handlePwdConfirmation = event => {
    this.setState({comfirmed_password: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    const route = '/login';
    this.props.history.push(route);
  }

  render() {
    return(
      <form onSubmit = {this.handleSubmit}>
        <input type="text" placeholder="User Name" onChange={this.handleName}/> <br/>
        <input type="text" placeholder="Password" onChange={this.handlePwd}/> <br/>
        <input type="text" placeholder="Comfirmed Password" onChange={this.handlePwdConfirmation}/> <br/>
        <input type="submit" value="Sign Up"/>

      </form>
    );
  }
}

export default Registration;
