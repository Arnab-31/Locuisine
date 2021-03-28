import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import Geocode from "react-geocode";

const Map = (props) => {
    const [center, setCenter] = useState({lat: 43.7315, lng: -79.7624 });
    const [zoom, setZoom] = useState(12);
    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCTOD1Und52oU9unc9TRWlR0UOXqCEyFc8' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker
            lat={lat1}
            lng={lng1}
            name="Your Location"
            color="blue"
          />
          <Marker
            lat={43.726854}
            lng={-79.815719}
            name="The Spice Room"
            color="red"
          />
          <Marker
            lat={43.665983088504944}
            lng={-79.73179229046802}
            name="Silver Spoon Dinery"
            color="red"
          />
          <Marker
            lat={43.757407301897615}
            lng={-79.82995833115633}
            name="Mint Leaf Sweets and Restaurant"
            color="red"
          />
          <Marker
            lat={43.727003917770034}
            lng={-79.66631743493089}
            name="King Tandoori Grill"
            color="red"
          />
          <Marker
            lat={43.638681017140115}
            lng={-79.72846899674875}
            name="Avani Asian Indian Bistro"
            color="red"
          />
          <Marker
            lat={43.68190769481575}
            lng={-79.80320250483541}
            name="Rashmi's Bakery"
            color="red"
          />
        </GoogleMapReact>
      </div>
    );
}

export default Map;
