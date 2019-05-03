import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';

import { updateUser } from './../../redux/reducer';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }

  handleUpdate(prop, val){
    this.setState({
      [prop]: val
    })
  }
  login(){
    Axios.post('/api/login', this.state).then(res=>{
      this.props.history.push('/dash');
    })
  }
  register(){
    Axios.post('api/register', this.state).then(res=>{
      this.props.history.push('/dash');
    })
  }

  render() {
    return (
      <div>
        <h3>Auth</h3>
        <p>Username:</p>
        <input value={this.state.username} onChange={(event) => this.handleUpdate('username', event)} />
        <p>Password:</p>
        <input value={this.state.password} onChange={(event) => this.handleUpdate('password', event)} />
        <p>
        <button>Login</button>
        <button>Register</button>
        </p>
      </div>
    )
  }
}

export default Auth;