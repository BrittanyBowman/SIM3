import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Dash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      myPosts: true,
      posts: [],
      loading: true
    };
  }
  render() {
    let posts = this.state.posts.map(el => {
      return (
        <Link to={`/post/${el.post_id}`} key={el.post_id}>
          <div>
            <h3>{el.title}</h3>
            <div>
              <p>{el.author_username}</p>
              <img src={el.profile_pic} alt="author" />
            </div>
          </div>
        </Link>
      );
    });
    return (
      <div className="Dash">
        <div>
          <div>
            <input
              value={this.state.search}
              onChange={e => this.setState({ search: e.target.value })}
              placeholder="Search by Title..."
            />
            <img onClick={this.grabPosts} alt="search" />
            <button onClick={this.reset} id="dash_reset">
              Reset
            </button>
          </div>
          <div>
            <p>My Posts</p>
            <input
              checked={this.state.myPosts}
              onChange={() =>
                this.setState({ myPosts: !this.state.myPosts }, this.grabPosts)
              }
              type="checkbox"
            />
          </div>
        </div>
        <div>{!this.state.loading ? posts : <div />}</div>
      </div>
    );
  }
}

export default Dash;
