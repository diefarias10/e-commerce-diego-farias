import React, { useState } from "react";
import './ItemDetail.css';
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

export default function ItemDetail({ item }) {

    const [itemsAdded, setItemsAdded] = useState(0)

    function addToCart(number) {
        console.log('Se agregaron ' + number + ' items al carrito')
        setItemsAdded(number)
    }

    function gotoCart(){

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
                    itemsAdded > 0 ? <Link to='/cart'><button className="btnCart">Terminar mi compra</button></Link> : <ItemCount initial={1} stock={10} onAdd={addToCart} />
                }

            </div>
        </div>
    );
}