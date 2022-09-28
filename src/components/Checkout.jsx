import React, { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { getFirestore, collection, addDoc } from 'firebase/firestore';


export default function Checkout() {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [orderId, setOrderId] = useState('')
    const { cart, getTotalPrice } = useContext(CartContext)

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
            console.log(orderId)
        })

    }

    return (
        <div>
            <div className="checkoutForm">
                <input value={name} type="text" placeholder="Nombre" onChange={(e) => setName(e.target.value)} />
                <input value={phone} type="text" placeholder="Telefono" onChange={(e) => setPhone(e.target.value)} />
                <input value={email} type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

                <div className="checkoutForm-actions">
                    <button onClick={submitOrder}>Finalizar compra!</button>
                    <button>Cancelar</button>
                </div>

            </div>
        </div>
    )
}