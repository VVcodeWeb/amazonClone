import React, { Fragment } from 'react'
import "../styles/Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from "../provider/StateProvider";
function Subtotal() {
    const [{ basket }, reducer] = useStateValue()
    var sum = 0
    basket.forEach(item => sum = sum + item.price)
    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value) => (
                    <Fragment>
                        <p>Subtotal({basket?.length} items): <strong>{sum}</strong></p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift 
                        </small>
                    </Fragment>
                )}
                decimalScale={2}
                value={sum}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
