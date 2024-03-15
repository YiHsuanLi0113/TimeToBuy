import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import Axios from 'axios';


export default class ProductList extends Component {




    constructor(props) {
        super(props);
        this.state = {
            products: [
              //{ title: "some product", description: "interesting" ,id:1},
              //{ title: "another product", description: "more" ,id:2}
            ]
        };
    }
    componentDidMount() {
        this.populateProductDataUseAxios();
    }




    render(){
        return(
            <div className="row">
                {this.state.products.map(product =>
                    <div key={product.id} className="col-4">
                        <ProductCard product={product}></ProductCard>
                    </div>
                )}
            </div>
        );
    }


    async populateProductDataUseAxios() {
        let result = await Axios('http://localhost:8081/api/products');
        console.log(result.data);
        this.setState({ products: result.data});
    }
}
