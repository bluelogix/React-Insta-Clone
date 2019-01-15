import React from 'react'

import CommentContainer from '../CommentContainer/CommentContainer'

function Post(props) {
    return (
      <div>
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

        <p>{props.post.timestap}</p>
        </div> // end div
  
  
    )}

  export default Post;
  