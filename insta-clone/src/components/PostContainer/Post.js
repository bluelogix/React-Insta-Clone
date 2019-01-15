import React from 'react'
import './PostContainer.css'

import CommentContainer from '../CommentContainer/CommentContainer'

function Post(props) {
    return (
      <div className="post">
        <div> 
            <img src={props.post.thumbnailUrl} alt="thumbnail" />
            <p>{props.post.username}</p>
        </div>

        <div>
          <img src={props.post.imageUrl} alt="imageurl" />
        </div>

        <div>
        <i class="far fa-heart"></i>
        <i class="far fa-comment"></i>
        </div>

        <p>{props.post.likes} likes</p>



        <CommentContainer comment={props.post.comments} />


        <p>{props.post.timestamp}</p>
        
  
          <form>
          <input type="text"  placeholder="Add a comment..."></input>
         </form>

         </div> // end div
    )}

  export default Post;
  