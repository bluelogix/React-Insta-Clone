
import React from 'react'

import styled from 'styled-components';


const Img = styled.img`
    z-index: -1;
    position: relative;
    top: 20px;
    padding-left: 20px;
`;




const SearchBars = styled.div`
    display: flex;
    justify-content: space-around;
    height: 70px;
    border-bottom: 1px solid gray;
    align-items: center;
`;


const Input = styled.input`
   padding: 10px 20px;
`;







function SearchBar(props) {
    return (
        <SearchBars>

          
           <div className="insta">
            <i className="fab fa-instagram"></i>
            {/* <p> | </p> */}
            

            <Img src="https://miro.medium.com/max/960/1*XwGT5sRK8L-lYPMeQkUgog.png" width="100" alt="instaimg" />
            </div>
         

           

            <Input
             type="text"
             className="searchTerm" 
             placeholder="Search" 
             value={props.addSearch}/>
             
                {/* <button type="submit" className="searchButton">
                    <i className="fa fa-search"></i>
                </button>
                 */}

            <div>
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
             </div>

             </SearchBars>

    )}      
  export default SearchBar;


