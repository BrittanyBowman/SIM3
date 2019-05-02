import React from "react";
import { Link } from 'react-router-dom';


function Nav(props) {
  // if (props.location.pathname !=='/') {
    return <div>
      <h3>Nav</h3>
      <div>
        <button><Link to='/dash'>Home</Link></button>
        <button><Link to='/new'>New Post</Link></button>
        <button><Link to='/'>Logout</Link></button>
      </div>
      </div>;
  // } else {
  //   return null;
  // }
}


export default Nav;
