import React, { Component } from 'react';
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import {ProductConsumer} from "../../context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if(cart.length>0){
                            return (
                                <React.Fragment>
                                <div className="col-10 mx-auto my-3 text-left text-muted">
                                <h5>Thank you for shopping with us <FontAwesomeIcon className="thank" icon={faHeart}/></h5>
                                <Link to="/">
                                    <h6 className="text-primary">
                                        <span><FontAwesomeIcon icon={faArrowLeft} /> </span> continue shopping
                                        </h6>
                                </Link>
                                </div>
                                <hr />
                                <CartColumns/>
                                <CartList value = { value } />
                                <hr />
                                <CartTotals value = { value } history={this.props.history}/>
                                </React.Fragment>
                            )
                        }
                        else {
                            return <EmptyCart />;
                        }
                    }}
                </ProductConsumer>
            </section>
        )
    }
}
