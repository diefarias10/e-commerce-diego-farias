import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import './Cart.css';
import CartItem from "./CartItem";
import Popup from "./Popup";
import Checkout from "./Checkout";


export default function Cart() {
    const goTo = useNavigate()
    const { cart, howMany, removeItem, getTotalPrice } = useContext(CartContext)
    const [showCheckout, setShowCheckout] = useState(false)


    const checkoutSwitch = () => {
        setShowCheckout(!showCheckout)
    }

    return (
        <div style={{ height: '100vh', display: 'flex' }}>
            <div className="cart">
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
            <div className="cart-summary">
                <div className="cart-title">
                    <h2>Resumen de orden</h2>
                </div>
                <div className="cart-summary-details">
                    <p>Cantidad de items {howMany()}</p>
                    <div className="cart-summary-total">
                        <h3>COSTO TOTAL =</h3>
                        <h3>$ {getTotalPrice()}</h3>
                    </div>
                    <h3>Codigo de descuento</h3>
                    <input type="text" />
                    <button>Aplicar</button>
                </div>
                <div className="cart-summary-footer">
                    <button onClick={checkoutSwitch}>Checkout</button>
                </div>
            </div>
            <Popup show={showCheckout}>
                <Checkout close={checkoutSwitch} />
            </Popup>
        </div>
    );
}