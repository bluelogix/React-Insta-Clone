import React from 'react';



const authenticate = PostsPage => LoginPage => 
    class extends React.Component {
        constructor() {
            super();
                this.state = {
                    loggedIn: false
                }
        }


        componentDidMount(){
            if(!localStorage.getItem('userInfo')) {
                this.setState({loggedIn: false});
            } else {
                this.setState({ loggedIn: true})
            }

        }
        render() {
            if(this.state.loggedIn){
            return <PostsPage /> ;
        } 
            return ( <LoginPage /> );
        }
                
    }
    


  
  
  
  
  export default authenticate;