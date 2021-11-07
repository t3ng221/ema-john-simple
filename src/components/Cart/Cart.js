import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    return (
        <div>
          <h3>Order Summary</h3>  
          <p>Items Ordered: {cart.length}</p>
        </div>
    );
};

export default Cart;<h3>Order Summary</h3>