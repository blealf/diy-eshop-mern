import React, { useState, useEffect, useContext } from 'react';
import '../../styles/Cart.scss';
import {DataContext as OContext} from '../../utility/OrderProvider';
import {DataContext as PContext} from '../../utility/ProductProvider';

const Cart = () => {
  const orderContext = useContext(OContext);
  const productContext = useContext(PContext);
  const [ order, setOrder ] = useState(localStorage.getItem("orders") || []);
  const [ products, setProducts ] = useState([]);

  localStorage.setItem("orders", [])

  useEffect(() => {
    setOrder(orderContext ? orderContext.orders : []);
    setProducts(productContext ? productContext.products.filter(product => 
      product.id === (order.map(item => {
        if(product.id === item.product){
          return item.product
        }
      }
      ))
    ): []);
    // setProducts(productContext.products.filter(product => 
    //   product.id === '5f872363c3a7982491aab6fb'
    // ));
    
  }, (orderContext && productContext ? [orderContext, productContext] : []))

  // order.map(item => {
  //   if('5f74aaf5ca2d09428da3189e' === item.product ||
  //     '5f872363c3a7982491aab6fb' === item.product){
  //     console.log(item.product)
  //   }
  // })

  // products.map(product => {
  //   console.log(product.id)
  // })

  return (
    <div className="cartWrapper">
      <h2>Shopping Cart</h2>
      <div className="cartItemsWrapper">
        <div className="cartItems">
          <span className="selectItem">Select Item</span>
          <span className="itemPriceHeader">Price</span>
          { order.length > 0 ? order.map(item => (
              <span className="itemRow" key={item.id}>
                <input type="checkbox" name="selectItem" id="selectItem"/>
                <span className="itemWrapper">Something Here</span>
                <span className="itemPrice">CDN$ 20.00</span>
                {/* {console.log(item.product)} */}
              </span>
            )) : <h1>Nothing here!!</h1>
          }
          
          <span className="subtotal">Subtotal</span>
          <span className="subtotalPrice">CDN$ 45.00</span>
        </div>
        {console.log(products)}
        <div className="checkout">
          <span>Subtotal</span>
          <span>CDN$ 45.00</span>
          <span>HST</span>
          <span>CDN$ 8</span>
          <span>Total</span>
          <span>CDN$ 53</span>
          <button>Secure Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
