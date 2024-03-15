import React from 'react';
import { CustomerDetails } from './CustomerDetails';
import { Address } from './Address';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Button } from "reactstrap";
import Axios from 'axios';


export default class Checkout extends React.Component {
    state = { deliverToBillingAddress: true, customer: {}, billingAddress: {}, deliveryAddress: {} };


    handleCustomerDetailsUpdated = (newDetails) => {
        this.setState({ customer: newDetails });
    }


    toggleUseBillingAddress = () => {
        this.setState({ deliverToBillingAddress: !this.state.deliverToBillingAddress });
    };


    // Call Checkout API
    submit =  async () => {        
        Axios.post('http://localhost:8081/api/Checkout', {
            ...this.state,
            sessionId: localStorage.sessionId
        }).then(
            this.redirectHome
        );
        // place order now (submit everything to backend)    
    };
    redirectHome=async () => {    
        setTimeout(() => {
          // 👇️ redirects to Home
          window.location.replace('http://localhost:8080');
        }, 3000);
   
      //return <>Will redirect in 3 seconds...</>;
  };


    render() {
        return (
            <div>
                <h4>Your Details</h4>
                <CustomerDetails onChanged={this.handleCustomerDetailsUpdated} />


                <h4>Billing Address</h4>
                <Address onChanged={newAddress => this.setState({ billingAddress: newAddress,deliveryAddress: newAddress  })} />
                <Form>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" checked={this.state.deliverToBillingAddress}
                                onChange={this.toggleUseBillingAddress} /> Deliver to billing address?
                        </Label>
                    </FormGroup>
                </Form>
                {!this.state.deliverToBillingAddress &&
                    <div>
                        <h4>Delivery Address</h4>
                        <Address onChanged={newAddress => this.setState({ deliveryAddress: newAddress })} />
                    </div>
                }


                <h4>Payment Method</h4>
                <Button color='primary'  onClick={this.submit}>Place Order</Button>
            </div>
        )
    }
}


