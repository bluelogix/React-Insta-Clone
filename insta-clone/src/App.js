import React, { Component } from 'react';
// import logo from './logo.svg';

// import SearchBar from '.components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';
import './App.css';

class App extends Component {
  constructor() {
    super();

      this.state = {
        dummyInfo: dummyData,
      }
  }












  render() {
    return (
      <div className="App">
       {/* <SearchBar /> */}
        <PostContainer info={this.state.dummyInfo} />
       
      
      </div>
    );
  }
}

export default App;