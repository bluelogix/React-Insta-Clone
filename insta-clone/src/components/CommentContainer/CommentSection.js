// import React  from 'react';
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Comments from './Comments'




class CommentSection extends Component {
    constructor(props){
        super(props);
        this.state = {
            comments: props.comments,
            comment: ''

                
        }
    }

   
    


    handleChanges = e => {
        e.preventDefault(); 
            this.setState({ comment: e.target.value });
  };

    addNewComment = e => {
        console.log(this.state)
        console.log(this.props)
        console.log(this.state.comments)
        e.preventDefault();
            const newComment = {username: 'helloworld', text: this.state.comment}
            const comments = this.state.comments.slice();
            comments.push(newComment)
            this.setState({comments: comments, comment: ''})
           

        };

       



    render() {
        return (
            <div>
                {this.state.comments.map(comment => {
                return <Comments  key={comment.text} comment={comment} />
                })}

            <form onSubmit={this.addNewComment}>
                <input  
                value={this.state.comment} 
                onChange={this.handleChanges} 
                name="text" 
                type="text"  
                placeholder="Add a comment..."  />
         </form>

             </div> // end div
        )
    }
}

export default CommentSection;


// handleChanges={this.handleChanges}  addNewComment={this.addNewComment} 