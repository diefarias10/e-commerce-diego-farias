import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
    const { cart } = useContext(CartContext)

    console.log('MI CARRITO ' + cart)

    return (
        <div>
            <p>Cart</p>
        </div>
    );

}