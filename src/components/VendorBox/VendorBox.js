import React from 'react';
import classes from './VendorBox.module.css';
import { Container, Row, Col} from 'react-bootstrap';

function deg2rad(deg) {
    return deg * (Math.PI/180)
  }

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return ( Math.round(d * 100) / 100 )
  }


const VendorBox = (props) => {
    var link = `https://www.google.com/maps/dir/?api=1&origin=${props.lat},${props.lng}&destination=${props.userlat},${props.userlng}`;
    return (
        <div className={classes.VendorBox}>
        <Container className={classes.container}>
            <Row>
                <Col>{props.name}</Col>
                <Col>{getDistanceFromLatLonInKm(props.lat,props.lng,props.userlat,props.userlng)} Km</Col>
            </Row>
            <Row>
                <Col>Open Now- {props.time ? 'no' : 'yes'}</Col>
                <Col>{props.rating} Stars</Col>
            </Row>
            <Row>
                <Col><a href={link}>Find Path</a></Col>
                <Col> <a href='/restaurant'>More info</a></Col>
            </Row>
        </Container>
    </div>
    )
} 



export default VendorBox;