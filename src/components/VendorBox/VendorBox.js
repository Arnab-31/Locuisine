import React from 'react';
import classes from './VendorBox.module.css';
import { Container, Row, Col} from 'react-bootstrap';

const VendorBox = (props) => (
    <div className={classes.VendorBox}>
        <Container className={classes.container}>
            <Row>
                <Col>{props.name}</Col>
                <Col>{props.distance}</Col>
            </Row>
            <Row>
                <Col>{props.time}</Col>
                <Col>3 stars</Col>
            </Row>
        </Container>
    </div>
)



export default VendorBox;