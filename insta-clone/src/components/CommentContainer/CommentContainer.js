import React  from 'react';

import Comments from './Comments'

function CommentContainer(props) {
    return (
        <div>
            {props.comment.map(comment=> {
                return <Comments key={comment.text} comment={comment} />
            })}
        </div>
    )
}

export default CommentContainer;


// class CommentContainer extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             comment: this.props.comments
//         }
//     }




//     render() {
//         return (
//             <div>
//                 {this.state.comment.map(commentName=> {
//                 return <Comments key={commentName.text} commentName={commentName} />
//                 })}
//              </div>
//         )
//     }
// }

// export default CommentContainer;