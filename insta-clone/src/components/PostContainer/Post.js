import React from 'react'

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
        
        </div> // end div
  
  
    )}
  
  export default Post;
  