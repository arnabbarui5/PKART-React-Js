import React from "react";
import EmptyCartImg from "../../empcart.png";
import {Link} from "react-router-dom";

export default function EmptyCart() {
    return (
        <div className="text-center mt-5">
            <img src={EmptyCartImg} alt="empty-cart"/>
        <div className="container mt-5">
            <div className="row">
                <div className="col-10 mx-auto text-center text-capitalize">
                    <h1><strong> your cart is empty</strong></h1>
                    <h4>looks like you have no items in your shopping cart.</h4>
                    <h4>click <Link to="/"><span> here </span></Link> to continue</h4>
                </div>
            </div>
        </div>
        </div>
    )
}
