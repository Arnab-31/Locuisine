import React from 'react';
import {Link } from 'react-router-dom';
import Autocomplete from './SearchAutocomplete.js';

const SearchPage = (props) => {
  const SearchBar = ({keyword,setKeyword}) => {
    const BarStyling = {
      height:"2rem",
      width:"100%",
      background:"#F2F1F9",
      border:"none",
      padding:"0.5rem",
      display: "inline-block"};
    return (
      <>
      <div>
        <Autocomplete/>
      </div>
      <div className="distanceContainer">
        <select
            style={{
              height:"2rem",
              width:"100%",
              background:"#7FB3E3",
              display:"inline-block"}}
            >
                <option value="1">1 km</option>
                <option value="2">2 km</option>
                <option value="3">3 km</option>
                <option value="5">5 km</option>
                <option value="10">10 km</option>
            </select>
      </div>
      </>
    );
  }
  return (
    <div
    style={{
        position: 'absolute', left: '50%', top: '40%',
        transform: 'translate(-50%, -50%)'
    }}>
      <h1 className="websiteName">Locuisine</h1>
      <SearchBar/>
      <p>
        <div className="buttonContainer">
          <Link to="/search"><button className="button">Search</button></Link>
        </div>
        <div className="buttonContainer">
          <button className="button">Surprise Me!</button>
        </div>
      </p>
    </div>
   );
}

export default SearchPage
