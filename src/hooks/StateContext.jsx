import React, { createContext, useContext, useState, useEffect } from "react";

const Context = createContext()

export const StateContext = ({children}) => {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            .then(response => response.json())
            .then(data => setAllPhotos(data))
    }, []);

    const toggleFavorite = (id) => {
        const updatedArr = allPhotos.map(photo => {
            if(photo.id === id) {
                return { ...photo, isFavorite: !photo.isFavorite }
            }
            return photo
        })
        setAllPhotos(updatedArr)
    }

    const addToCart = (newItem) => {
        setCartItems(prevArr => [...prevArr, newItem])
    }

    const removeFromCart = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    const emptyCart = () => {
        setCartItems([])
    }
    
    return (
        <Context.Provider value={{
            allPhotos,
            toggleFavorite,
            cartItems,
            setCartItems,
            addToCart,
            removeFromCart,
            emptyCart
        }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)