import React, { Component } from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <img
        className="checkout__ad"
        src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CCMP/newstorefront/YACC-desktop-prime-banner3.png"
      />
      {basket?.length === 0 ? (
        <div>
          <h2>Your shopping basket is empty</h2>
          <p>You have no items in your basket.</p>
        </div>
      ) : (
        <div>
          <h2 className="checkout_title">Your Shopping Basket</h2>

          {/* List out all the checkout products */}
          {basket.map(item => 
              <CheckoutProduct
              id = {item.id}
              title = {item.title}
              rating = {item.rating}
              price = {item.price}
              image = {item.image}
              />
          )}
        </div>
      )}
    </div>
    
  );
}

export default Checkout;
