import React from 'react'

import Likes from './Likes'
import styled from 'styled-components';
import CommentSection from '../CommentContainer/CommentSection'




const PostDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #D3D3D3;
  margin: 20px 25%;
  width: 50%;
  

`;

const PostTop = styled.span`
  position: relative;
  z-index: -1;
  bottom: 40px;
  padding: 0 60px;
  
  font-weight: bold;

`;


const PostThumb = styled.img`
   border-radius: 100%;
   padding: 10px;
   width: 5%;
   height: 5%;
`;





class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.likes
    }
  }

addLikes = () => {
  let likes = this.state.likes + 1;
  this.setState({likes})
};






  render() {
    return (
      <PostDiv>
        
          
            <PostThumb alt="thumbnail" src={this.props.post.thumbnailUrl}  />
            <PostTop>
             <span>{this.props.post.username}</span>
          </PostTop>
      
      
          <img src={this.props.post.imageUrl} alt="imageurl" />
       

        
        <Likes likes={this.state.likes} addLikes={this.addLikes} />

        
        <CommentSection  comments={this.props.post.comments} />


        <p>{this.props.post.timestamp}</p>
        
  
  
        </PostDiv>// end div
    )}
    }
  export default Post;
  