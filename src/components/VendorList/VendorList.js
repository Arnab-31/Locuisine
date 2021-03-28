import React from 'react';
import { Dropdown } from 'react-bootstrap';

import VendorBox from '../VendorBox/VendorBox';
import classes from './VendorList.module.css'

const VendorList = (props) => {

    return (<div>
        <Dropdown className={classes.Dropdown}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Filter By
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Ratings</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Indian Food</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Mexican Food</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Chinese Food</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Thai Food</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Italian Food</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        {
            props.vendors.map (e => (
                <VendorBox name={e.name} time={e.open_now} rating={e.rating} lat={e.geometry.location.lat} lng={e.geometry.location.lng} userlat={props.userlat} userlng={props.userlng} />
            ))
        }
    </div>)
}

export default VendorList;
