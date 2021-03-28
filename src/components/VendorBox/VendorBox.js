import React from 'react';
import classes from './VendorBox.module.css';
import { Container, Row, Col} from 'react-bootstrap';

const VendorBox = (props) => (
    <div className={classes.outBox}>
        <div className={classes.VendorBox}>
            <p className={classes.left}>
                {props.name}<br />
                {props.time}
            </p>
            <p className={classes.right}>
            {props.distance} 
            </p>
        </div>
    </div>
)



export default VendorBox;