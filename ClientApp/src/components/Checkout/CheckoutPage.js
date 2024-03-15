import React from 'react';
import { Row, Col } from 'reactstrap';
import Checkout from './Checkout';


export default class CheckoutPage extends React.Component {
    render() {
        return (
            <div>
                <p>Please register or log in to complete your order</p>
                <Row>
                    <Col md={10}>
                        <Checkout />
                    </Col>
                    <Col md={2}>
                    </Col>
                </Row>
            </div>      
        )
    }
}
