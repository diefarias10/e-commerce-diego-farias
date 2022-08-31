import React from "react";
import './Item.css';

export default function Item({ item }) {

    return (

        <div className="itemCard">
            <h1>{item.title}</h1>
            <div>
                <img src={item.pictureUrl} alt="Foto juego" />
            </div>
            <div>
                <p>{item.description}</p>
            </div>
            <button>Ver detalle</button>
            <div className="itemStock">
                <p>Stock disponible: </p>
            </div>
        </div>

    );
}