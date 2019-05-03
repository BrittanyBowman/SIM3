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
    }
    this.grabPosts = this.grabPosts.bind(this);
    this.reset = this.reset.bind(this);
  }
  componentDidMount(){
    this.grabPosts();
  }
  //The endpoint should respond with the post title, image, and content for that post, as well as the username and profile picture of the post author (Hint: Use a join).
  grabPosts(){
    let {search, myPosts} = this.state;
    let url = `/api/posts/${this.props.id}`;
    if (myPosts && !search) {
      url += '?mine=true';
    } else if (!myPosts && search) {
      url += `?search=${search}`;
    } else if (myPosts && search) {
      url += `?mine=true&search=${search}`;
  }
  axios.get(url).then(res=> {
    setTimeout(() => this.setState({posts: res.data, loading: false, }), 500)
  })
}
reset(){
  let {myPosts} = this.state;
  let url = `/api/posts/${this.props.id}`;
  if (myPosts) {
    url += '?mine=true';
  }
  axios.get(url)
  .then(res => {
    this.setState({ posts: res.data, loading: false, search: '' })
  })
}

  render() {
    let posts = this.state.posts.map(el => {
      //Update where you are mapping over the list of posts in Dashboard to include a Link.
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
          <div><center>
            <input
              value={this.state.search}
              onChange={e => this.setState({ search: e.target.value })}
              placeholder="Search by Title..."
            />
            <img onClick={this.grabPosts} alt="search" />
            <button onClick={this.reset} id="dash_reset">
              Reset
            </button>
            </center>
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
function mapStateToProps(state) {
  //Pull the user id off of Redux State.
  return {
    id: state.id
  }
}

export default connect(mapStateToProps)(Dash);
