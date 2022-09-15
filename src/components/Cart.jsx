import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
    const { cart } = useContext(CartContext)

    return (
        <div style={{height: '100vh'}}>
            <p>Cart</p>
        </div>
    );

}