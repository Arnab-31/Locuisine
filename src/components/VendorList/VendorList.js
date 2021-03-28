import React from 'react';
import { Dropdown } from 'react-bootstrap';

import VendorBox from '../VendorBox/VendorBox';
import classes from './VendorList.module.css'

const VendorList = (props) => (
    <div>
        <Dropdown className={classes.Dropdown}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Sort By
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
        <VendorBox name="Avani Asian Indian Bistro" time="11 AM - 9 PM" distance="6.1 km" />
        <VendorBox name="King Tandoori Grill" time="8 AM - 6 PM" distance="5.5 km" />
        <VendorBox name="Mint Leaf Sweets and Restaurant" time="9 AM - 9 PM" distance="8.9 km" />
        <VendorBox name="Silver Spoon Dinery" time="1 PM - 12 AM" distance="3.2 km" />
    </div>
)

export default VendorList;
