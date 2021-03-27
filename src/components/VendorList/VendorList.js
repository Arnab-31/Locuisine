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
            </Dropdown.Menu>
        </Dropdown>
        <VendorBox name="Avani" time="11am-9pm" distance="1.1Km" />
        <VendorBox name="Avani" time="11am-9pm" distance="1.1Km" />
        <VendorBox name="Avani" time="11am-9pm" distance="1.1Km" />
        <VendorBox name="Avani" time="11am-9pm" distance="1.1Km" />
    </div>
)

export default VendorList;