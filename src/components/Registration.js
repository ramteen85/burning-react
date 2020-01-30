
  import React, {Component} from 'react';

  class Registration extends Component {
    constructor(props)
    super(props)
    this.state = {
      name: '',
      password: '',
      comfirmed_password: ''
    }
  }

  handleChange = (e) => {
    this.setState({name:event.target.value});
  }

  handleChange = (e) => {
    this.setState({password:event.target.value});
  }

  handleChange = (e) => {
    this.setState({comfirmed_password:event.target.value});.
  }

  handleSubmit = (e) => {
    event.preventDefault();
    const route = '/login';
    this.props.history.push(route);
  }

  render() {
    return(
      <form onSubmit = {this.handleSubmit}>
        <input type="text" placeholder="User Name" onChange={this.handlechange}/> <<br/>
        <input type="text" placeholder="Password" onChange={this.handlechange}/> <<br/>
        <input type="text" placeholder="Comfirmed Password" onChange={this.handlechange}/> <<br/>
        <input type="submit" value="Sign Up"/>

      </form>
    );
  }

  export default Registration;
  
