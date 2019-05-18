import React from "react";
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../redux/reducer';


function Nav(props) {
  // console.log('nav', props);
  if (props.location.pathname !=='/') {
    return <div>
      <h3>Nav</h3>
      <div style={{backgroundImage: `url('${props.profilePic}')`}}></div>
      <div>
        <p>{props.username}</p></div>
        <div>
        <button><Link to='/dash'>Home</Link></button>
        <button><Link to='/new'>New Post</Link></button>
        <button><Link to='/'>Logout</Link></button>
      </div>
      </div>;
  } else {
    return null;
  }
}
function mapStateToProps(state){
  return state;
}

export default withRouter(connect(mapStateToProps, { logout })(Nav));
