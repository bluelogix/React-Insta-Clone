import React, { Component } from 'react';
import PostsPage from './components/PostContainer/PostsPage';
import authenticate from './components/Authentication/authenticate'
import LoginPage from './components/Login/Login'

import './App.css';










class App extends Component {
  constructor() {
    super();

      this.state = {
        // dummyInfo: dummyData,
        // addSearch: []
      }
  }

  


  render() {
    return (
      <div className="App">
      <PostsPage />
      
      </div>
    );
  }
}




export default authenticate(PostsPage)(LoginPage);
