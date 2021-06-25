import React from 'react';

export const CartCard = (props) => {
    return(
        <div className="card" style={{width: '18rem', margin: 'auto'}}>
            <div className="card-body">
                <h5 className="card-title">Total Products - {props.totalProducts}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Total Cart Value - {props.totalValue} </h6>
                {
                    props.onFeed ?
                    <a href='/checkout'><button className='btn btn-success'>Checkout</button></a> :
                    <a href='#'><button className='btn btn-success'>Make an order</button></a>
                }
            </div>
        </div>
    )
}