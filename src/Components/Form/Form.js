import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      img: '',
      content: ''
    };
    this.submit = this.submit.bind(this);
  }
  submit() {
    axios.post('/api/post', this.state)
      .then(res => this.props.history.push('/dash'))
      .catch(err => alert('Please login to post') )
}
render() {
    const noImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAB6CAMAAAAPtKhWAAAAYFBMVEX/f38zMzP/gYH/g4MuMjIoMDAAKSnze3vTbm4GKiqPVFTodnZVPj7acHARLCz/hYUaLS1eQUF1SUnBZ2ciLy9kRERpRUWrXl5JOjqdWFhANzeATU1OOzuUVFTIaWk5NTVeUHMwAAADhUlEQVR4nO2ba3eyMAyAJaWWya1oAdF3+v//5ZCLcitzb5PpOcuzL57t2D1LSBMq22wYhmEYhmEYhmHeH4BN8wXDV5vxy+9+MPoOrhwoAkAgaYqwKiJ88n0JAkEP1C4x0idA6uvBPYYAe+NR4ZvSOYaw02R+NR8XR0MIJKWf50fKLctpl2CJj98srN1CCOrYrCPPO3QK2a6cOgmGbfx2Ah9o/naZYwg65mGZdH8LoZ+5pbgTRNivZvxtQQxfMsG6x9edXjgPJESCIOIqP56O2efFcRihEQR19tvRwZgidFqbRBBU/mjN5hi4LE4hCOo0bM1+EjpkmUTwPB69ZO7Q6gkEIZ6OXtphnsMVFO2S09nVP72LYBvBdrQZGcarOV67L8KPIMTXqZ8nL2uC9aZkv0jxIwjxzM+Ta10awuKjsBpSCC5EcEWw3jSNZwpbTyQQDE+za1AGVkFQ2a2mjG0rIigSEc0EPWsGQRVtzZt8OYYUguV0HzR728AOKur3JEsMKbYZNd1nfFuGIcwfTdEsVgpJqzskI7/k0+Z3q49BoJeyTDLNpNXo9+7TZcFBfu1ZJpoHS92nTuqdpU/U9TE9j5DzGBJN1CI860QbnSSFbRqcxW/5OqS6JwFQh7IqD6FtAx7Vx0qW6e7qoD0YsL2l3//mhuM/iWDceuod6p/tPNFkoxi+5sZ9oT4GlZINY/iSCHb918boOnxFBCHM1s87h4a/IAiTRmytj0GW83t10QuKy+do8bpVf3/e/qgUckEReEk5PLMJV+pjGMOuUqgFRaB9T1f3LNf18dznAf11SCwoLt5t9DJVfyjyXX0MDNshklZQxKY7pS+b3/ZEfdzxM3pBcdH96KpvlfJUfdwFc3JBEVwfo7Uu4cn6+DVBEevh6K8rWO0fvy7Y1ccDOb8dfaWgiOXU50d+1IKD+vhPaAVn+X0TwX6Vpn+8o2AXQYT4kUZwoT7eRbA9m7kYBD+6CC4dv72NoO2ElQVZkAVZ8K8INht1oBMMthFVq1MxEgT3xc0qgMWGKIK4sKArmIKmTNGuvztpjiLYfETsn4IQnbK52ZeF0/ODG9GdWSVbdNrDOpfnRhrB2SewyFxdng26oSLSx4CTyvXZzrpMCA3tTzQ8jwiO7vfqy/jJylMrP4ghVJHefqCz9YsDzv9DAKgwDtCJQ4zw3R0pQNNjGIZhGIZhGIah4gsO22ffVZwyrwAAAABJRU5ErkJggg==';
  let imgSrc = this.state.img ? this.state.img : noImage;
  return (
    <div>
      <h2 className='title'>New Post</h2>
      <div>
        <p>Title:</p>
        <input value={this.state.title} onChange={e => this.setState({ title: e.target.value })} />
      </div>
      <div style={{ backgroundImage: `url('${imgSrc}')` }} alt='preview' ></div>
      <div>
        <p>Image URL:</p>
        <input value={this.state.img} onChange={e => this.setState({ img: e.target.value })} />
      </div>
      <div>
        <p>Content:</p>
        <textarea value={this.state.content} onChange={e => this.setState({ content: e.target.value })} />
      </div>
      <button onClick={this.submit} className='dark_button form_button'>Post</button>
    </div>
  );
}
}

export default Form;