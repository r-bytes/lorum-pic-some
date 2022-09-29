import React, { useState } from "react"
import { useStateContext } from "../hooks/StateContext"
import CartItem from "../components/CartItem"

function Cart() {
    const {cartItems, emptyCart} = useStateContext()
    const [buttonText, setButtonText] = useState("Place Order")
    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-us", {style: "currency", currency: "USD"})
    

    const placeOrder = () => {
        setButtonText("Ordering...")

        setTimeout(() => {
            console.log("order has been placed!")
            setButtonText("Place Order")
            emptyCart()
        }, 3000);
    }

    const cartItemsElement = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemsElement}
            <p className="total-cost">Total: {totalCostDisplay} </p>
            {
                cartItems.length > 0 ?
                <div className="order-button">
                    <button onClick={placeOrder}>{buttonText}</button>
                </div> : 
                <p> You have no items in your cart </p>
            }
        </main>
    )
}

export default Cart