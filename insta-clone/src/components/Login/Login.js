import React, { Component } from 'react';
import styled from 'styled-components';

const LoginInfo = styled.div`
display: flex;
flex-direction: column;
margin: 200px 600px;
`;

const InputForm = styled.input`
display: flex;
flex-direction: column;
padding: 10px 10px;
border: 2px solid black;
margin: 10px 0;
`;

const Img = styled.img`
// padding-right: 0 -70%;
width: 100%;

`;








class Login extends Component {
    constructor(props) {
      super(props);
  
        this.state = {
          username: '',
          password: ''
        }
    }
  
    handleLogin = e => {
        this.setState({[e.target.name]: e.target.value })
    }
  
    addLogin = e => {
        // e.preventDefault(); //don't know if this is needed
        const userInfo = this.state.username;
        localStorage.setItem('userInfo', userInfo);
        window.location.reload();
    }
  
    render() {
      return (
       <LoginInfo>

             <Img src="https://miro.medium.com/max/960/1*XwGT5sRK8L-lYPMeQkUgog.png" width="100" alt="instaimg" />

             
            <form onSubmit={this.addLogin}>
                <InputForm
                type="text" 
                placeholder="username" 
                name="username"
                value={this.state.username}
                onChange={this.handleLogin}
                 />

                <InputForm
                type="password" 
                name="password"
                placeholder="password" 
                value={this.state.password}
                onChange={this.handleLogin}
                />
                <button>Login</button>
            </form>
          
        
        </LoginInfo>
      );
    }
  }
  
  
  
  
  export default Login;
  