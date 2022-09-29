import React from 'react'
import { useStateContext } from "../hooks/StateContext";
import PropTypes from 'prop-types';
import useHover from "../hooks/useHover";

const Image = ({className, img}) => {
    const [hovered, hoverRef] = useHover()
    const {toggleFavorite, addToCart, removeFromCart, cartItems} = useStateContext()
    const imageClass = img.isFavorite ? "ri-heart-fill favorite" : "ri-heart-line favorite"
    
    const cartItemsElement  = () => {
        const alreadyInCard = cartItems.some(item => item.id === img.id)

        if (alreadyInCard) {
            return <i className={"ri-shopping-cart-fill cart"} onClick={() => removeFromCart(img.id)}></i>
            
        } else if (!alreadyInCard) {
            return <i className={"ri-add-circle-line cart"} onClick={ () => addToCart(img)}></i>
        }
    }

    return (
        <div className={`${className} image-container`}>
            <img
                src={img.url} alt={"..."}
                className="image-grid"
                ref={hoverRef}
            />
            {hovered && <i className={imageClass} onClick={() => toggleFavorite(img.id)}></i>}
            {cartItemsElement()}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    image: PropTypes.shape({
        id: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image