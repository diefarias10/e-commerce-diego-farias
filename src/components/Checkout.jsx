import React, { useState } from "react";
import { useContext } from "react";
import './Checkout.css';
import { CartContext } from "../context/CartContext";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";


export default function Checkout({ close }) {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [orderId, setOrderId] = useState('')
    const { cart, getTotalPrice, clearCart } = useContext(CartContext)

    function submitOrder() {
        setLoading(true)

        let order = {
            buyer: { name: name, phone: phone, email: email },
            products: cart,
            total: getTotalPrice()
        }

        const db = getFirestore();

        const myCollection = collection(db, 'orders')

        addDoc(myCollection, order).then(({ id }) => {
            setLoading(false)
            setOrderId(id)
            clearCart()
        })

    }

    return (
        <div>
            {orderId ?
                <div>
                    <p>Compra finalizada!</p>
                    <p>Su código de orden es: <b>{orderId}</b></p>
                    <div className="checkoutForm-actions">
                    <button className="checkoutForm-PrimaryBtn" onClick={close}>Entendido</button>
                    </div>
                </div>
                :
                <div className="checkoutForm">
                    <h1>Completa tus datos para finalizar la compra</h1>
                    <input value={name} type="text" placeholder="Nombre" onChange={(e) => setName(e.target.value)} />
                    <input value={phone} type="text" placeholder="Telefono" onChange={(e) => setPhone(e.target.value)} />
                    <input value={email} type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

                    <div className="checkoutForm-actions">
                        <button className="checkoutForm-PrimaryBtn" onClick={submitOrder}>Finalizar compra!</button>
                        <button className="checkoutForm-SecondaryBtn" onClick={close}>Cancelar</button>
                    </div>
                </div>
            }
        </div>


    )
}/* master*/