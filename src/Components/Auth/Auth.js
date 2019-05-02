import React, { Component } from 'react';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(prop, event){
    this.setState({
      [prop]: event.target.value
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