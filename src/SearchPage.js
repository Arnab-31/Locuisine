import React from 'react';
import SearchBar from './components/SearchBAr/SearchBar'

class SearchPage extends React.Component {

  state={
    postalcode: 700281,
  }



  render () {
    var BarStyling = {height:"1.5rem" ,width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
    var style={
      position: 'absolute', left: '50%', top: '30%',
      transform: 'translate(-50%, -50%)'}
  
      return (
          <div>
          <input className="addre"
          style={BarStyling} value={this.state.postalcode}
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
      <h1 className="websiteName">Locuisine</h1>
      <p><button className="surpriseButton" onClick={() => { document.location.replace(`/search?${document.querySelector('.addre').val}`);}} >Surprise Me!</button></p>
    </div>
   );
  }
}

export default SearchPage