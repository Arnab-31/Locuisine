import React from 'react';

const SearchBar = ({keyword,setKeyword}) => {
    const BarStyling = {height:"1.5rem" ,width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
    return (
      <>
          <input className="address"
          style={BarStyling}
          placeholder={"Enter address or postal code.."}
          />
          <select
          style={{height:"2.5rem" ,width:"4rem",background:"#7FB3E3"}}
          >
              <option value="1">1 km</option>
              <option value="2">2 km</option>
              <option value="5">5 km</option>
              <option value="10">10 km</option>
          </select>
      </>
    );
  }


export default SearchBar;
