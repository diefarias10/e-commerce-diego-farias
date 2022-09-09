import React from "react";
import './ItemDetail.css';
import ItemCount from "./ItemCount";

export default function ItemDetail({ item }) {
    return (
        <div className="itemDetail">
            <div className="picture">
                <img src={item.pictureUrl} alt="Foto producto" />
                <p className="stock">Stock disponible!</p>
            </div>
            <div className="details">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <h2>$ {item.price}</h2>
               <ItemCount initial={1} stock={10} onAdd={null} />
            </div>
        </div>
    );
}