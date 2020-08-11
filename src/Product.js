import React from "react";
import { useStateValue } from "./StateProvider";
import "./Product.css";

function Product({ id, title, image, price, rating }) {

  const [ {basket}, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        image,
        rating
      },
    })

  };

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__infoTitle">{title}</p>
      </div>
      <img src={image} alt="" />
      <div className="productInfo__infoReserve">
      <button className="productInfo__infoReserveButton" onClick={addToBasket}>Reserve </button>

      </div>
    </div>
  );
}

export default Product;
