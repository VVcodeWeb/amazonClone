import React from "react";
import { useStateValue } from "../provider/StateProvider";
import "../styles/BasketItem.css"
function BasketItem({ id, title, price, rating, image }) {
    const [ { basket }, dispatch] = useStateValue()
    const handleRemoveItemFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            item:{
                id
            }
        })
    }
  return (
    <div className="basket-item">
      <img src={image} alt={`${id}`} />
      <div className="basket-item__info">
        <h3>{title}</h3>
        <p>${price}</p>
        <div className="product__rating">
          {Array(rating).fill().map((_, i) => (
            <p key={i}><span role="img" aria-label="star">&#11088;</span></p>
          ))}
        </div>
        <button onClick={handleRemoveItemFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default BasketItem;
