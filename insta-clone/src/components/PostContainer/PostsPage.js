import React, { Component } from 'react';
// import logo from './logo.svg';
import PropTypes from 'prop-types'
import SearchBar from '../SearchBar';
import PostContainer from '../PostContainer/PostContainer';
import dummyData from '../../dummy-data';











class PostsPage extends Component {
  constructor() {
    super();

      this.state = {
        dummyInfo: dummyData,
        addSearch: []
      }
  }

  
  
  // addNewSearch = e => {
  //   let addSearch = this.state.dummyInfo
  //   let searchUser = addSearch.filter(user => {
  //    return user.username
  //   }
  //     this.setState({
  //       addSearch: searchUser })
  // }


  componentDidMount() {
    console.log('did mount?')
    this.setState({dummyInfo: dummyData})
  }









  render() {
    return (
      <div className="App">

            <SearchBar  />
            <PostContainer info={this.state.dummyInfo} />
      
      </div>
    );
  }
}



PostsPage.propTypes= {
  dummyData: PropTypes.shape({
    username: PropTypes.string,
    thumnbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timeStamp: PropTypes.string,
    }),
    comments: PropTypes.arrayOf(PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
  }))
}
export default PostsPage;


// search={this.addNewSearch}