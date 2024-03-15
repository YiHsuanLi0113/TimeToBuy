import React, { Component } from 'react';
import Axios from 'axios';


export default class AddToCart extends Component {
    state = {}
    constructor(props) {
        super(props);


        this.onSubmit = this.onSubmit.bind(this);
        this.nameChanged = this.nameChanged.bind(this);
        this.setState({ quantity: 1 });


    }
    async onSubmit(e) {
        e.preventDefault();
        let request = { ProductId: this.props.productId, quantity: this.state.quantity  }
        let sessionId = localStorage.sessionId;
        if (sessionId) {
            request.sessionId = sessionId;    
            //console.log(localStorage.sessionId);
        }
        let result = await Axios.post('http://localhost:8081/api/cart', request);
        localStorage.sessionId = result.data.sessionId;
        //console.log(result.data);
         this.setState({ itemJustAdded: true });
         setTimeout(() => this.setState({ itemJustAdded: false }), 6000);
 
    }
    nameChanged(event) {
        let abs = Math.abs(event.target.value);
        let quantity = abs === 0 ? 1 : abs;
        this.setState({ quantity: quantity });
    }


    render() {
        return <form onSubmit={this.onSubmit}>
            <div className="form-row">
                <div className="form-group">
                    <div class="input-container">
                        <label for="qty">Quantity</label>
                        <input id="qty" name="qty" type="number" min="1" max="10" className="form-control col-sm-2 mr-2" value={this.state.quantity} onChange={this.nameChanged} required />
                    </div>
                    <button className="btn btn-primary form-control" disabled={this.state.itemJustAdded} type="submit">
                        Add to Cart
                    </button>
                </div>
            </div>
            {this.state.itemJustAdded &&<span className="alert alert-primary">Item added to cart</span>}
        </form>;
    }
}
