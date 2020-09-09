import React from "react";
import "../styles/Product.css";
import { useStateValue } from "../provider/StateProvider";
function Product( { id, title, image, price, rating}) {
  const [ { basket }, dispatch] = useStateValue()
  
  const handleAddToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item:{
        title,
        image,
        price,
        rating,
        id
      }
    })
  }
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating).fill().map((_, i) => (
            <p key={i}><span role="img" aria-label="star">&#11088;</span></p>
          ))}
        </div>
    </div>
        <img
          src={image}
          alt="product"
        />
        <button onClick={handleAddToBasket}>Add to cart</button>
    </div>
  );
}

export default Product;
