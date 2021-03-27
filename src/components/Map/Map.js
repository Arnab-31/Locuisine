import React, { useState } from 'react'
import { GoogleMap, useLoadScript } from '@react-google-maps/api'

const Map = () => {
  const [ myMap, setMyMap ] = useState(null);
  const [ center, setCenter ] = useState({ lat: 29.972065, lng: -90.111533 });

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCTOD1Und52oU9unc9TRWlR0UOXqCEyFc8',
  });

  const renderMap = () => (
        <GoogleMap
          mapContainerStyle={{
            height: "100%",
            width: "100%",
          }}
          zoom={10}
          center={center}
          onLoad={map => setMyMap(map)}
        >
        </GoogleMap>
  )

  return isLoaded ? renderMap() : null;
}

export default Map
