import React, { Component } from 'react'
import Product from "./Product";
import {ProductConsumer} from "../context";

export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <h1 className="text-center text-uppercase text-title"><strong>our products</strong></h1>
                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                    return value.products.map(product => {
                                        return <Product key={product.id} product={product} /> 
                                    });
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>


                // <Product/>  
        );
    }
}
