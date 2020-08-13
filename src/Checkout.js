import React, { Component } from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">

      {basket?.length === 0 ? (
        <div>
          <h2 className="checkout__title">Your reservation is empty</h2>
          <p className="checkout__title">You have no reservations.</p>
        </div>
      ) : (
        <div>
          <h2 className="checkout__title">Your Whips</h2>

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
