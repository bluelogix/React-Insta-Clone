
import React from 'react'
import './SearchBar.css'

function SearchBar(props) {
    return (
        <div className="searchBar">

          
           <div className="insta">
            <i className="fab fa-instagram"></i>
            {/* <p> | </p> */}
            

            <img  src="https://miro.medium.com/max/960/1*XwGT5sRK8L-lYPMeQkUgog.png" width="100" alt="instaimg" />
            </div>
         

           <div>
            <input type="text" className="searchTerm" placeholder="Search"></input>
                <button type="submit" className="searchButton">
                    <i className="fa fa-search"></i>
                </button>
           </div>

            <div>
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
             </div>

        </div> // End Div

    )}      
  export default SearchBar;


