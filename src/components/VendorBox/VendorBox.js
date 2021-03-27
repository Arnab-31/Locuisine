import React from 'react';
import classes from './VendorBox.module.css';

const VendorBox = (props) => (
    <div className={classes.VendorBox}>
        <p className={classes.para}>{props.name}</p>
        <p className={classes.para}>{props.time}</p>
        <p className={classes.distance}>{props.distance}</p>
    </div>
)

export default VendorBox;