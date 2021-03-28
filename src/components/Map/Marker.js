import React from 'react';
import './Marker.css';

<<<<<<< HEAD
const Marker = (props) => {
    const { color, name, id } = props;
=======
const Marker = (props: any) => {
    const { color, name, } = props;
>>>>>>> d2b58bbe90810bf8c84c130c023a982896cf69ba
    return (
      <div>
        <div
          className="pin bounce"
          style={{ backgroundColor: color, cursor: 'pointer' }}
          title={name}
        />
        <div className="pulse" />
      </div>
    );
  };

  export default Marker;
