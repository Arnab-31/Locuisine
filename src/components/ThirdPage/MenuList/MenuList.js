import React from 'react';
import { Dropdown } from 'react-bootstrap';

import MenuBox from '../MenuBox/MenuBox';
import classes from './MenuList.module.css'

const MenuList = (props) => (
    <div className={classes.menulist}>
        <p>Specials</p>
        <hr className={classes.line}/>
    <MenuBox name="Burger" desc="Patty cooked in sizzling hot burning greasy disgusting motor oil." price="$99.99"/>
    <MenuBox name="Hotdog" desc="Sausage cooked in sizzling hot burning greasy disgusting motor oil." price="$99.99"/>
    <MenuBox name="French Fries" desc="Fries cooked in sizzling hot burning greasy disgusting motor oil." price="$99.99"/>
    <MenuBox name="Milkshake" desc="Milk cooked in sizzling hot burning greasy disgusting motor oil." price="$99.99"/>
    </div>
)

export default MenuList;
