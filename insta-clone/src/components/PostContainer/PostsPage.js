import React, { Component } from 'react';
// import logo from './logo.svg';
import PropTypes from 'prop-types'
import SearchBar from '../SearchBar';
import PostContainer from '../PostContainer/PostContainer';
import dummyData from '../../dummy-data';











class PostsPage extends Component {
  constructor(props) {
    super(props);

      this.state = {
        dummyInfo: [],
        search: ''
      }
  }

  // handleSearch = e => {
    // this.setState({ })
  // }
  
  addNewSearch = e => {
    console.log()
    let dummyInfo = this.state.dummyInfo.filter(p => {
      if(p.username.includes(e.target.value)) {
        return p;
      }
    });
    
      this.setState({
        search: dummyInfo })
  }


  componentDidMount() {
    console.log('did mount?')
    this.setState({dummyInfo: dummyData})
  }









  render() {
    return (
      <div >

            <SearchBar  addSearch={this.addSearch} />
            <PostContainer  dummyInfo={this.state.search.length > 0 ? this.state.search : this.state.dummyInfo} info={this.state.dummyInfo} />
      
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