import React from 'react'
import styled from 'styled-components';


const CommentInfo = styled.div`
font-size: 20px;
text-align: left;
`;

const User = styled.div`
font-weight: bold;

`;

const Comment = styled.div`
padding-bottom: 20px;
`;




function Comments(props) {
    return (
          <CommentInfo>
            <User>
           {props.comment.username}</User>
          
         
            <Comment> {props.comment.text} </Comment>
            
          </CommentInfo>

          
  
  
    )}
  
  export default Comments;
  
