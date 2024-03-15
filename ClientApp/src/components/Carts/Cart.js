import React, { Component } from 'react';
import Axios from 'axios';
import RemoveItem from './RemoveItem';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';




export default class Cart extends Component {


    state = { items: [] }
    constructor(props) {
        super(props);
        this.handleItemRemoved = this.handleItemRemoved.bind(this);
    }
   async componentDidMount() {
        await this.getCart();
    }
    async handleItemRemoved() {
        this.getCart();
    }


    async getCart() {
        var response = await Axios(`http://localhost:8081/api/cart?sessionId=${localStorage.sessionId}`);
        var totalAmount=0;
        response.data.items.map(item =>{
            totalAmount+=(item.quantity*item.price);
        });


        this.setState(response.data);
        this.setState({total:totalAmount});


    }


    render() {
        return (
            this.state.items.length === 0
            ? <div>There's nothing here!</div>
            :
            <div>
                <Row className='clearfix' style={{ padding: '.5rem' }}>
                    <Col>
                        <Link to='/checkout' className='btn btn-primary float-right'>Checkout</Link>
                    </Col>
                </Row>


                <Row>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        {this.state.items.map(item =>
                            <tr key={item.productId}>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                                <td><RemoveItem productId={item.productId} onItemRemoved={this.handleItemRemoved} /></td>


                            </tr>
                        )}
                        <tr>Total Price: ${this.state.total}</tr>
                    </table>
                </Row>
            </div>
        );
    }
}
