import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
   // const totalPrice=cart.reduce((total,prd)=>total+prd.price,0);
   let total =0;
   for (let i = 0; i < cart.length; i++) {
     const product = cart[i];
     total = total+product.price;
     
   }
   let shipping = 15.99;
   if(total>50){
     shipping = 12.99;
   }
    if(total>100){
     shipping =4.99;
    }
    if(total>200){
     shipping =0;
   }
   const tax =(total/10).toFixed(2);
   const grandTotal=(total+shipping+Number(tax)).toFixed(2);

  
   const formatNumber =num=>{
     const percision=num.toFixed(2);
     return Number(percision);
   }


    return (
        <div>
          <h3>Order Summary</h3>  
          <p>Items Ordered: {cart.length}</p>
          <p>Product Price: {formatNumber(total)}</p>
          <p>Shipping Cost: {shipping}</p>
          <p>Tax/VAT: {tax}</p>
          <p>Total Price: {grandTotal}</p>
        </div>
    );
};

export default Cart;