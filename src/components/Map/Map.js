import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

const Map = (props: any) => {
    const [center, setCenter] = useState({lat: 43.7315, lng: -79.7624 });
    const [zoom, setZoom] = useState(11);
    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCTOD1Und52oU9unc9TRWlR0UOXqCEyFc8' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker
            lat={43.7315}
            lng={-79.7624}
            name="Your Location"
            color="blue"
          />
          <Marker
            lat={43.757407301897615}
            lng={-79.82995833115633}
            name="Mint Leaf Sweets and Restaurant"
            color="red"
          />
          <Marker
            lat={43.77186833422961}
            lng={-79.6219686}
            name="King Tandoori Grill"
            color="red"
          />
          <Marker
            lat={43.60668832083854}
            lng={-79.69193770477634}
            name="Avani Asian Indian Bistro"
            color="red"
          />
        </GoogleMapReact>
      </div>
    );
}

export default Map;

// import React, { Component } from 'react';
// import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
//
// const mapStyles = {
//   width: '100%',
//   height: '100%'
// };
//
// export class MapContainer extends Component {
//
//   state = {
//     showingInfoWindow: false,
//     activeMarker: {},
//     selectedPlace: {}
//   };
//
//   onMarkerClick = (props, marker, e) =>
//     this.setState({
//       selectedPlace: props,
//       activeMarker: marker,
//       showingInfoWindow: true
//     });
//
//   onClose = props => {
//     if (this.state.showingInfoWindow) {
//       this.setState({
//         showingInfoWindow: false,
//         activeMarker: null
//       });
//     }
//   };
//
//
//
//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         zoom={14}
//         style={mapStyles}
//         initialCenter={
//           {
//             lat: 43.8563,
//             lng: -79.5085
//           }
//         }
//       >
//         <Marker
//           lat={43.60668832083854}
//           lng={-79.69193770477634}
//           onClick={this.onMarkerClick}
//           name={'Your Location'}
//         />
//         <InfoWindow
//           marker={this.state.activeMarker}
//           visible={this.state.showingInfoWindow}
//           onClose={this.onClose}
//         >
//           <div>
//             <h4>{this.state.selectedPlace.name}</h4>
//           </div>
//         </InfoWindow>
//       </Map>
//     );
//   }
// }
//
// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyCTOD1Und52oU9unc9TRWlR0UOXqCEyFc8'
// })(MapContainer);
