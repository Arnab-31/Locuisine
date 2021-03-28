import React, { useState } from 'react';
import {Link } from 'react-router-dom';

class SearchPage extends React.Component{


  constructor(props) {
    super(props);

    this.state = {
      postal: 0
    }

    this.onInputchange = this.onInputchange.bind(this);

  }


  onInputchange(e){
    this.setState({
      postal: e.target.value
    });
  }

  render () {
  return (
    <div
    style={{
        position: 'absolute', left: '50%', top: '40%',
        transform: 'translate(-50%, -50%)'
    }}>
      <h1 className="websiteName">Locuisine</h1>
      <input type="text" id="postal" placeholder="Enter postal code..." onChange={this.onInputchange}></input>
      <p>
        <div className="buttonContainer">
          <Link to={{
            pathname: "/search",
            search: "?postal=" + `${this.state.postal}`,
          }}> <button className="button">Search</button></Link>
        </div>
        <div className="buttonContainer">
          <button className="button">Surprise Me!</button>
        </div>
      </p>
    </div>
   );
  }
}

export default SearchPage
