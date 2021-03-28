import React from 'react';
import NavigationBar from '../Navigation/Navigation';
import MenuList from './MenuList/MenuList';
import RestaurantInfo from './RestaurantInfo/RestaurantInfo';
import classes from './ThirdPage.module.css';

const ThirdPage = (props) => (
    <div className={classes.all}>
         <NavigationBar />
        <div>
          <RestaurantInfo />
          <MenuList />
        </div>
    </div>
)

export default ThirdPage;
