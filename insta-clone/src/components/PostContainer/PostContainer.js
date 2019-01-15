import React from 'react'
import Post from './Post'




function PostContainer(props) {
    return (
        <div>
            {props.info.map(post => {
                return <Post key={post.username} post={post} />
            
            })}

           
             
    
        </div>
    )
}

export default PostContainer;