import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import SubjectIcon from '@material-ui/icons/Subject';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {id,company,img,info,title,price,inCart,offer,oldprice,off} = value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/*Product Info*/}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <img src={img} className="img-fluid" alt="product"/>
                                </div>
                                {/*Product Text*/}
                                <div className="col-10 mx-auto col-md-6 my-1 text-capitalize">
                                <h2>{title}</h2>
                                <h5 className="text-title text-uppercase text-muted mt-3 mb-2"><span className="text-capitalize">{company}</span></h5>
                                <h4 className="text-black text-capitalize">
                                    <h3>
                    <span>Rs.</span>&nbsp;{price} &nbsp; <span className="old-price text-muted h5 mb-4">Rs. {oldprice}</span>&nbsp; <span className="h5 discount"><strong>( {off}% OFF )</strong></span>
                                    </h3>
                                    <div>
                                    <small className="text-color .text-success h6">inclusive all taxes</small>
                                    </div>
                                </h4>

                                <div>
                                    <Link to="/">
                                        <ButtonContainer className="text-uppercase p-3" >
                                            back to products</ButtonContainer>
                                    </Link>
                                        <ButtonContainer className="text-uppercase p-3" cart
                                        disabled={inCart?true:false}
                                        onClick={()=>{
                                        value.addToCart(id);
                                        // value.openModal(id);
                                        }}> { inCart ? "inCart" : "add to cart"}</ButtonContainer>
                                </div>

                                <p className="text-capitalize font-weight-bold mt-3 mb-0"></p>
                                <p className="text-capitalize font-wight-bold lead">{info} &nbsp; <LocalOfferIcon/></p>
                                <h5 className="best-price">Best Price: <span className="final-price">&nbsp; Rs. {offer}</span></h5>
                                <ul className="offer">
                                <li>Applicable on: Orders above Rs. 2500 (only on first purchase)</li>
                                <li>Coupon code: <span className="best-price">WELCOME500</span></li>
                                <li>Coupon Discount: 20% off upto Rs. 500 (check cart for final savings)</li>
                                </ul>

                                <h5><strong>Product Details</strong> &nbsp; < SubjectIcon/></h5>
                                <p>Navy blue and white printed kurta dress, has a notched round neck, three-quarter bell sleeves, flared hem Size & Fit</p>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}
