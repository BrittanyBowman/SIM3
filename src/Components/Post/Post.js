import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
  constructor(props){
    super(props)
    this.state = {
      author: '',
      author_pic: '',
      title: '',
      img: '',
      content: '',
      loading: true
    }
  }
  componentDidMount(){
    axios.get(`api/posts/${this.props.match.params.id}`).then(res => {
      setTimeout(()=> this.setState({...res.data, loading: false }), 500)
    })
  }
  render() {
    const noImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAB6CAMAAAAPtKhWAAAAYFBMVEX/f38zMzP/gYH/g4MuMjIoMDAAKSnze3vTbm4GKiqPVFTodnZVPj7acHARLCz/hYUaLS1eQUF1SUnBZ2ciLy9kRERpRUWrXl5JOjqdWFhANzeATU1OOzuUVFTIaWk5NTVeUHMwAAADhUlEQVR4nO2ba3eyMAyAJaWWya1oAdF3+v//5ZCLcitzb5PpOcuzL57t2D1LSBMq22wYhmEYhmEYhmHeH4BN8wXDV5vxy+9+MPoOrhwoAkAgaYqwKiJ88n0JAkEP1C4x0idA6uvBPYYAe+NR4ZvSOYaw02R+NR8XR0MIJKWf50fKLctpl2CJj98srN1CCOrYrCPPO3QK2a6cOgmGbfx2Ah9o/naZYwg65mGZdH8LoZ+5pbgTRNivZvxtQQxfMsG6x9edXjgPJESCIOIqP56O2efFcRihEQR19tvRwZgidFqbRBBU/mjN5hi4LE4hCOo0bM1+EjpkmUTwPB69ZO7Q6gkEIZ6OXtphnsMVFO2S09nVP72LYBvBdrQZGcarOV67L8KPIMTXqZ8nL2uC9aZkv0jxIwjxzM+Ta10awuKjsBpSCC5EcEWw3jSNZwpbTyQQDE+za1AGVkFQ2a2mjG0rIigSEc0EPWsGQRVtzZt8OYYUguV0HzR728AOKur3JEsMKbYZNd1nfFuGIcwfTdEsVgpJqzskI7/k0+Z3q49BoJeyTDLNpNXo9+7TZcFBfu1ZJpoHS92nTuqdpU/U9TE9j5DzGBJN1CI860QbnSSFbRqcxW/5OqS6JwFQh7IqD6FtAx7Vx0qW6e7qoD0YsL2l3//mhuM/iWDceuod6p/tPNFkoxi+5sZ9oT4GlZINY/iSCHb918boOnxFBCHM1s87h4a/IAiTRmytj0GW83t10QuKy+do8bpVf3/e/qgUckEReEk5PLMJV+pjGMOuUqgFRaB9T1f3LNf18dznAf11SCwoLt5t9DJVfyjyXX0MDNshklZQxKY7pS+b3/ZEfdzxM3pBcdH96KpvlfJUfdwFc3JBEVwfo7Uu4cn6+DVBEevh6K8rWO0fvy7Y1ccDOb8dfaWgiOXU50d+1IKD+vhPaAVn+X0TwX6Vpn+8o2AXQYT4kUZwoT7eRbA9m7kYBD+6CC4dv72NoO2ElQVZkAVZ8K8INht1oBMMthFVq1MxEgT3xc0qgMWGKIK4sKArmIKmTNGuvztpjiLYfETsn4IQnbK52ZeF0/ODG9GdWSVbdNrDOpfnRhrB2SewyFxdng26oSLSx4CTyvXZzrpMCA3tTzQ8jwiO7vfqy/jJylMrP4ghVJHefqCz9YsDzv9DAKgwDtCJQ4zw3R0pQNNjGIZhGIZhGIah4gsO22ffVZwyrwAAAABJRU5ErkJggg==';
    let imgSrc = this.state.img ? this.state.img : noImage;
    return (
      <div>
        {!this.state.loading && this.state.title
          ?
          <div>
            <div>
              <h2 className='title'>{this.state.title}</h2>
              <div>
                <p>by {this.state.author}</p>
                <img src={this.state.author_pic} alt='author' />
              </div>
            </div>
            <div>
              <div className='post_img' style={{ backgroundImage: `url('${imgSrc}') ` }} alt='post' ></div>
              <p>{this.state.content}</p>
            </div>
          </div>
          :
          !this.state.loading
            ?
            <div>
              <h2 className='title'>Oops!</h2>
              <p>Looks like this post doesn't exist anymore</p>
            </div>
            :
            <div>
              
            </div>
        }
      </div>
    )
  }
}

export default Post;