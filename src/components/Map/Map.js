import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import Geocode from "react-geocode";

const Map = (props) => {

    const params = new URLSearchParams(window.location.search)
    var postal = params.get('postal');

    //const [center, setCenter] = useState({lat: props.lat, lng: props.lng });
    const [zoom, setZoom] = useState(12);

    var center = { lat: props.lat, lng: props.lng }
    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCTOD1Und52oU9unc9TRWlR0UOXqCEyFc8' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker
<<<<<<< HEAD
            lat={props.lat}
            lng={props.lng}
=======
            lat={lat1}
            lng={lng1}
>>>>>>> d2b58bbe90810bf8c84c130c023a982896cf69ba
            name="Your Location"
            color="blue"
          />


            {
            props.vendors.map (e => (
                <Marker lat={e.geometry.location.lat} lng={e.geometry.location.lng} name={e.name} color="red" />
            ))
            }

        
        </GoogleMapReact>
      </div>
    );
}

export default Map;
