import React from 'react'
import Phones from '../Phone/Phone1'
import Computers from './../Computers/Computers';
import Searchbar from './../Navbars/Searchbar';

function Homepage() {
    return (
        <div>
            <Searchbar/>
            <Phones />
            <Computers/>
        </div>
    )  
  }

  export default Homepage