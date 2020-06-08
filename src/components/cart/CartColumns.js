import React from 'react'

export default function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block mt-5">
        <div className="row">

        <div className="col-10 mx-auto col-lg-2">
        <p className="text-uppercase text-title">items</p>
        </div>

        <div className="col-10 mx-auto col-lg-2">
        <p className="text-uppercase text-title">product</p>
        </div>

        <div className="col-10 mx-auto col-lg-2">
        <p className="text-uppercase text-title">price</p>
        </div>

        <div className="col-10 mx-auto col-lg-2">
        <p className="text-uppercase text-title">quantity</p>
        </div>

        <div className="col-10 mx-auto col-lg-2">
        <p className="text-uppercase text-title">remove</p>
        </div>

        <div className="col-10 mx-auto col-lg-2">
        <p className="text-uppercase text-title">total</p>
        </div>
        </div>  
    </div>
    )
}
