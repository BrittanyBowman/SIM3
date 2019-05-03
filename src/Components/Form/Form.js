// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import axios from 'axios';

// class Form extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: '',
//       img: '',
//       content: ''
//     };
//     this.submit = this.submit.bind(this);
//   }
//   submit(){
//     if (this.props.id) {
//       axios.post(`/api/post/${this.props.id}`, this.state).then(res => {
//         this.props.history.push('/dash'))
//       } else {
//         alert('Login to create a post')
//       }
//     }
//   }
//   render() {
//     return (
//       <div>Form</div>
//     );
//   }
// }

// export default Form;