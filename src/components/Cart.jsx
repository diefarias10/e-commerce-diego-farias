import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import './Cart.css';
import CartItem from "./CartItem";

export default function Cart() {
    const { cart, howMany, removeItem } = useContext(CartContext)

    return (
        <div style={{ height: '100vh' }}>
            <div className="cart">
                {
                    howMany() > 0 ? <div>
                        <div className="cart-title">
                            <h1>Carrito de compras</h1>
                            <p>{howMany()} Items</p>
                        </div>
                        {cart.map(product => /* Se deberia renderizar un componente CartItem en lugar del codigo de abajo */
                            <CartItem item={product} />
                        )}
                        <div className="cart-footer">
                            <Link to={'/'}>Continuar comprando!</Link>
                        </div>
                    </div>
                        :
                        <div className="cart-empty">
                            <p>El carrito de compras está vacío...</p>
                            <Link to={'/'}>Ir a comprar!</Link>
                        </div>

                }


            </div>
        </div>
    );

}