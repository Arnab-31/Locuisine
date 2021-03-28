import React from 'react';
import classes from './VendorBox.module.css';
import { Container, Row, Col} from 'react-bootstrap';

const VendorBox = (props) => (
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
    </div>
)



export default VendorBox;