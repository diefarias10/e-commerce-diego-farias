import React, { useState } from "react";
import './ItemDetail.css';
import ItemCount from "./ItemCount";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ItemDetail({ item }) {
    const goTo = useNavigate()
    const [itemsAdded, setItemsAdded] = useState(0)
    const { addItem } = useContext(CartContext)
    const {id, title, price, stock, pictureUrl} = item

    function addToCart(number) {
        
        let purchase = {
            id,
            title,
            price,
            stock,
            pictureUrl,
            quantity: number
        }
        setItemsAdded(number)
        addItem(purchase)

        console.log('Mando al carro esto: ' + purchase.title)
    }

    return (
        <div className="itemDetail">
            <div className="picture">
                <img src={item.pictureUrl} alt="Foto producto" />
                <p className="stock">Stock disponible: {item.stock}</p>
            </div>
            <div className="details">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <h2>$ {item.price}</h2>
                {
                    itemsAdded > 0 ? <button className="btnCart" onClick={() => goTo('/cart')}>Terminar mi compra</button> : <ItemCount initial={1} stock={10} onAdd={addToCart} />
                }

            </div>
        </div>
    );
}