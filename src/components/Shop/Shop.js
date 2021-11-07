import React from 'react';
import fakeData from '../../fakeData';
import {useState} from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Shop = () => {

    const first10=fakeData.slice(0,100);
    const [products,setProducts] = useState(first10);
    const [cart,setcart]= useState([]);
    const handleAddProduct=(product)=>{
        console.log('Product Added');
        const newCart =[...cart,product];
        setcart(newCart);
    }
    return (
        <div className="shop-container">
            <h1>This is shop</h1>
           <div className="product-container">
                {
                    products.map(prdct=><Product handleAddProduct={handleAddProduct} product={prdct} ></Product>)
                }
           </div>
           <div className="cart-container">
               <Cart></Cart>
           </div>
        </div>
    );
};

export default Shop;