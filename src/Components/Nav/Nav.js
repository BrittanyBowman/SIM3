import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import { updateUser, logout } from './../../ducks/reducer';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  componentDidMount() {
    axios.get('/api/auth/me')
      .then(res => {
        this.props.updateUser(res.data);
      })
  }
  logout() {
    axios.post('/api/auth/logout')
      .then(res => this.props.logout())
  }
  render() {
    if (this.props.location.pathname !== '/') {
      return (
        <div className='Nav'>
          <div>
            <div style={{ backgroundImage: `url('${this.props.profilePic}')` }}></div>
            <p>{this.props.username}</p>
          </div>
          <div>
            <Link to='/dash'>Dashboard</Link>
            <Link to='/new'>New Post</Link>
          </div>
          <Link to='/' onClick={this.logout}></Link>
        </div>
      )
    } else {
      return null
    }
  }
}
function mapStateToProps(state) {
  return state;
}
export default withRouter(connect(mapStateToProps, { updateUser, logout })(Nav));