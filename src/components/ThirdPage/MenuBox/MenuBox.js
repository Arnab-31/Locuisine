import React from 'react';
import classes from './MenuBox.module.css';

const MenuBox = (props) => (
    <div className={classes.itemBorder}>
        <p className={classes.left}>
            <p>
                {props.name} <br />
                {props.desc}
            </p>
        </p>
        <p className={classes.right}>
            {props.price}
        </p>
    </div>
)

export default MenuBox;