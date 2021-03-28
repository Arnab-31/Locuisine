import React from 'react';
import classes from './SecondPage.module.css';
import NavigationBar from '../Navigation/Navigation';
import VendorList from '../VendorList/VendorList';
import MapContainer from '../Map/Map';
import axios from  '../../axios-res';
import Geocode from "react-geocode";

var params = window.location.search;
var postalCode = params.substring(8)
console.log(postalCode);

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey("AIzaSyCTOD1Und52oU9unc9TRWlR0UOXqCEyFc8");

// set response language. Defaults to english.
Geocode.setLanguage("en");



// Get latitude & longitude from address.
const findCoord = async() => {
    const res = await Geocode.fromAddress(postalCode);
    var lat1 = res.results[0].geometry.location.lat;
    var lng1 = res.results[0].geometry.location.lng;
    console.log(lat1);
    console.log(lng1);
    var obj = {lat: lat1, lng: lng1};
    return obj;
}

var lat,lng;






   
class SecondPage extends React.Component {

    state  = {
        vendors: [],
        latt: 42.31175795567795,
        longg: -82.9201591162427,
    }
    
   

    componentDidMount () {

            setTimeout(async () =>
            { 
                var res = await findCoord();
                lat = res.lat;
                lng = res.lng;
                console.log(lat);
                console.log(lng);
                axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=1500&type=restaurant&key=AIzaSyCTOD1Und52oU9unc9TRWlR0UOXqCEyFc8`)
                .then(response => {
                    console.log(response);
                    this.setState({vendors : response.data.results, latt: lat, longg: lng})
                })
                .catch(error => {
                    this.setState({error:true});
                });        
            },
            3000);
             
        // var user = gapi.auth2.getAuthInstance().currentUser.get();
        // var xhr = new XMLHttpRequest();
        // xhr.open('GET', 'https://people.googleapis.com/v1/people/me/connections');
        // axios.get('location=-33.8670522,151.1957362&radius=1500&type=restaurant&key=AIzaSyCTOD1Und52oU9unc9TRWlR0UOXqCEyFc8')
        //     .then(response => {
        //        console.log(response)
        //     })
        //     .catch(error => {
        //         this.setState({error:true});
        //     });
    }

    render() {
        return (
            <div>
            <NavigationBar />
                <div className={[classes.split, classes.left].join(' ')}>
                    <MapContainer vendors={this.state.vendors} lat={this.state.latt} lng={this.state.longg}/>
        
                </div>
                <div className={[classes.split, classes.right].join(' ')}>
                    <VendorList vendors={this.state.vendors} userlat={this.state.latt} userlng={this.state.longg} />
                </div>
             </div>
        )
    }
}



export default SecondPage;

