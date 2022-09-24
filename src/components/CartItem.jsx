import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import './Cart.css';

export default function CartItem({ item }) {
    const { removeItem } = useContext(CartContext)

    return (

        <div className="cart-product">
            <div className="cart-product-primary">
                <img src={item.pictureUrl} alt="" />
                <div className="cart-product-data">
                    <p className="cart-product-title">{item.title}</p>
                    <p className="cart-product-id">#{item.id}</p>
                    <a className="cart-product-remove" >Eliminar</a>
                    <button onClick={removeItem(item.id)}>Borrar</button>
                </div>
            </div>
            <div className="cart-product-count">
                <p>x {item.quantity}</p>
            </div>
            <div className="cart-product-price">
                <p>$ {item.price}</p>
            </div>
        </div>
    )
}