import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    console.log(props);
    const { img, name, seller, price, stock } = (props.product);
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-name">
                <h4>{name}</h4>
                <br />
                <p><small>by: {seller}</small></p>
                <h3>Price: ${price}</h3>
                <br />
                <p><small>Only {stock} left in stock</small></p>
                <button className="cart-button" onClick={()=>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} />Add to Cart</button>
            </div>
        </div>

    );
};

export default Product;