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

    const howMany = () => {
        return cart.length;
    }

    return (
        <CartContext.Provider value={{ cart, addItem, clear, removeItem , howMany}}>
            {children}
        </CartContext.Provider>
    )
}

