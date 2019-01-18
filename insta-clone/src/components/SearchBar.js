
import React from 'react'
import './SearchBar.css'
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


// const Input = styled.div`
// //    padding: 20px;
// border: 2px solid red;
// `;







function SearchBar(props) {
    return (
        <SearchBars>

          
           <div className="insta">
            <i className="fab fa-instagram"></i>
            {/* <p> | </p> */}
            

            <Img src="https://miro.medium.com/max/960/1*XwGT5sRK8L-lYPMeQkUgog.png" width="100" alt="instaimg" />
            </div>
         

           <div>

            <input
             type="text"
             className="searchTerm" 
             placeholder="Search" 
             value={props.addSearch}/>
             
                <button type="submit" className="searchButton">
                    <i className="fa fa-search"></i>
                </button>
           </div>

            <div>
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
             </div>

             </SearchBars>

    )}      
  export default SearchBar;


