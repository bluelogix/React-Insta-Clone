import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';





function PostContainer(props) {
    return (
        <div>
            {props.info.map(post => {
                return <Post key={post.username} post={post} />
            
            })}

           
             
    
        </div>
    )
}

PostContainer.propTypes = {
    info: PropTypes.array
}

export default PostContainer;