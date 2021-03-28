import React from 'react';
import classes from './SecondPage.module.css';
import NavigationBar from '../Navigation/Navigation';
import VendorList from '../VendorList/VendorList';
import MapContainer from '../Map/Map';

const SecondPage = (props) => (
    <div>
         <NavigationBar />
        <div className={[classes.split, classes.left].join(' ')}>
          <MapContainer />

        </div>
        <div className={[classes.split, classes.right].join(' ')}>
          <VendorList />
        </div>
    </div>
)

export default SecondPage;
