import { Children, createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (item) => {

        let itemFound = cart.find((product) => product.id === item.id)

        if (itemFound) {
            const updatedCart = cart.map((product) => {
                if (product.id === item.id) {
                    return { ...product, quantity: product.quantity + item.quantity }
                } else {
                    return product
                }
            })
            setCart(updatedCart)
        } else {
            setCart([...cart, item])
        }
    }

    const clear = () => {
        setCart([])
    }

    const removeItem = (id) => {
        setCart(cart.filter((product) => product.id !== id))
    }

    const isInCart = (id) => {
        return cart.some((product) => product.id === id)
    }

    const getTotalPrice = () => {
        let total = 0

        cart.map((product) => {
            total += product.price * product.quantity
        })

        return total
    }

    const howMany = () => {
        let number = 0

        cart.map((item) => {
            number += item.quantity;
        })
        return number;
    }

    return (
        <CartContext.Provider value={{ cart, addItem, clear, removeItem, howMany, getTotalPrice }}>
            {children}
        </CartContext.Provider>
    )
}

