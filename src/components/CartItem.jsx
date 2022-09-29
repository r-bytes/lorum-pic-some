import React from 'react'
import { useStateContext } from "../hooks/StateContext"
import PropTypes from "prop-types"
import useHover from "../hooks/useHover"

const CartItem = ({item}) => {
    const {removeFromCart} = useStateContext()
    const [hovered, hoverRef] = useHover()

    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return (
        <div className="cart-item">
        <i
            className={iconClassName}
            onClick={() => removeFromCart(item.id)}
            ref={hoverRef}
        >

        </i>
        <img src={item.url} width="130px" alt="" />
        <p>$5.99</p>
    </div>
    )
}

CartItem.propTypes = {
    // propname
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem