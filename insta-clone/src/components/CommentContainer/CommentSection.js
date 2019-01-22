// import React  from 'react';
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Comments from './Comments'



const Input = styled.input`
width:97%;
padding: 20px 10px;
font-size: 20px;
border: none;
border-top: 1px solid gray;
`;





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
                <Input 
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