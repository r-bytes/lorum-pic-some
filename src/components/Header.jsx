import React from "react"
import { Link } from "react-router-dom"
import { useStateContext } from "../hooks/StateContext"

function Header() {
    const {cartItems} = useStateContext()
    const shoppingClass = cartItems.length > 0 ? "ri-shopping-cart-fill ri-fw ri-2x" : "ri-shopping-cart-line ri-fw ri-2x"

    return (
        <header>
            <Link to={"/"}>
                <h2> Pic Some </h2>
            </Link>
            <Link to="/cart">
            <i className={shoppingClass}></i>
            </Link>
        </header>
    )
}

export default Header