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
      this.props.updateUser(res.data);
      this.props.history.push('/dash');
    })
  }
  register(){
    Axios.post('api/register', this.state).then(res=>{
      this.props.updateUser(res.data);
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
        <button onClick={this.login}>Login</button>
        <button onClick={this.register}>Register</button>
        </p>
      </div>
    )
  }
}

export default connect(null, { updateUser })(Auth);

// Write a POST endpoint in your server for registering.
// The endpoint should pull the username and password off of the body.
// The endpoint create a new user in the database.
// The endpoint should respond with the newly created user.
// Write a method in Auth that sends an axios request to the endpoint you just wrote.
// The axios request should take the username and password off of state and put them in the body of the request.
// Once the response comes back, navigate to the Dashboard view.
// Set up the 'Register' button to fire the method.
// Write a POST endpoint in your server for logging in.
// The endpoint should pull the username and password off of the body.
// The endpoint should pull the user with the matching username and password out of the database.
// The endpoint should respond with the user.
// Write a method in Auth that sends an axios request to the endpoint you just wrote.
// The axios request should take the username and password off of state and put them in the body of the request.
// Once the response comes back, navigate to the Dashboard view.
// Set up the 'Login' button to fire the method.