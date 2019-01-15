
import React from 'react'
import './SearchBar.css'

function SearchBar(props) {
    return (
        <div className="searchBar">

          
           <div className="insta">
            <i class="fab fa-instagram"></i>
            {/* <p> | </p> */}
            

            <img  src="https://miro.medium.com/max/960/1*XwGT5sRK8L-lYPMeQkUgog.png" width="100" alt="instaimg" />
            </div>
         

           <div>
            <input type="text" class="searchTerm" placeholder="Search"></input>
                <button type="submit" class="searchButton">
                    <i class="fa fa-search"></i>
                </button>
           </div>

            <div>
                <i class="far fa-compass"></i>
                <i class="far fa-heart"></i>
                <i class="far fa-user"></i>
             </div>

        </div> // End Div

    )}      
  export default SearchBar;


