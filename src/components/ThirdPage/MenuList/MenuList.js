import React from 'react';
import { Dropdown } from 'react-bootstrap';

import MenuBox from '../MenuBox/MenuBox';
import classes from './MenuList.module.css'

const MenuList = (props) => (
    <div className={classes.menulist}>
        <hr className={classes.line}/>
    <MenuBox name="Burger" desc="Juicy, big, loaded with toppings of my choice" price="$23.99"/>
    <MenuBox name="Hotdog" desc=" Topped with shredded lettuce, crispy bacon, bleu cheese crumbles and drizzled with ranch dressing" price="$21.99"/>
    <MenuBox name="French Fries" desc=" Crunchy exterior and a light, fluffy interior" price="$10.99"/>
    <MenuBox name="Milkshake" desc=" Cold drink made of milk, a sweet flavouring such as fruit or chocolate, and typically ice cream, whisked until it is frothy" price="$13.99"/>
    </div>
)

export default MenuList;
