import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import AddToCart from './AddToCart';


function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}


//export default class ProductDetails extends Component {
export class ProductDetails extends Component {
    constructor(props) {
        super(props);
        //const params=useParams();
        //console.log(params.id);
        //React Hook "useParams" cannot be called in a class component. React Hooks must be called in a React function component or a custom React Hook function
        const id=props.params.id;
        console.log(id);
        this.state = {
            //name: 'Some interesting product', description: 'this is the product', price: 130
        };


    }
    async componentDidMount() {
        var result = await Axios(`http://localhost:8081/api/products/${this.props.params.id}`);
        this.setState(result.data);
    }


    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <div className="media">
                        <img src="https://via.placeholder.com/600" className="mr-3" alt="Product" />
                        <div className="media-body">
                            <h1>{this.props.params.id}-{this.state.name}</h1>
                            <p>{this.state.description}</p>
                            <p>${this.state.price}</p>
                            <AddToCart productId={this.props.params.id}></AddToCart>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}


export default withParams(ProductDetails);
