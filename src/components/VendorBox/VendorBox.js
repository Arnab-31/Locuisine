import React from 'react';
import classes from './VendorBox.module.css';
import { Container, Row, Col} from 'react-bootstrap';

const VendorBox = (props) => (
<<<<<<< HEAD
    <div className={classes.VendorBox}>
        <Container className={classes.container}>
            <Row>
                <Col>{props.name}</Col>
                <Col>1.1km</Col>
            </Row>
            <Row>
                <Col>Open Now- {props.time ? 'no' : 'yes'}</Col>
                <Col>{props.rating} Stars</Col>
            </Row>
        </Container>
=======
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
>>>>>>> d2b58bbe90810bf8c84c130c023a982896cf69ba
    </div>
)



export default VendorBox;