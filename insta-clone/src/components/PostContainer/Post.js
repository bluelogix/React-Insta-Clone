import React from 'react'
import './PostContainer.css'

import CommentSection from '../CommentContainer/CommentSection'

function Post(props) {
    return (
      <div className="post">
        <div> 
            <img className="thumbimg" src={props.post.thumbnailUrl} alt="thumbnail" />
            <p>{props.post.username}</p>
        </div>

        <div>
          <img src={props.post.imageUrl} alt="imageurl" />
        </div>

        <div>
        <i className="far fa-heart"></i>
        <i className="far fa-comment"></i>
        </div>

        <p>{props.post.likes} likes</p>



        <CommentSection  comments={props.post.comments} />


        <p>{props.post.timestamp}</p>
        
  
          {/* <form onSubmit={props.addNewComment}>
          <input value={props.addComment} onChange={props.handleChanges} name="addComment" type="text"  placeholder="Add a comment..." />
         </form> */}

         </div> // end div
    )}

  export default Post;
  