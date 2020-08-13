import React from "react";
import { useStateValue } from "./StateProvider";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
      
    //remove item from 
    dispatch({
        type: "REMOVE_FROM_BASKET",
        id: id,
    })
  }
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>



        <button className="checkoutProduct__infobutton" onClick={removeFromBasket}>Remove</button>

      </div>
    </div>
  );
}

export default CheckoutProduct;
