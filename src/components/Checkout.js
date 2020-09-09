import React from 'react'
import "../styles/Checkout.css"
import Subtotal from "./Subtotal"
import BasketItem from "./BasketItem"
import { useStateValue } from "../provider/StateProvider";

function Checkout() {
    const [{basket}, action ] = useStateValue()
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg" alt="ad" />
                <h2 className="checkout__title">
                   That is your basket 
                </h2>
                {basket.length > 0 && basket?.map(item => 
                    <BasketItem key={item.id} id={item.id} title={item.title} price={item.price} rating={item.rating} image={item.image}/>
                )}
            </div>

            <div className="checkout__right">
                <h2>The subtotal will go there</h2>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
