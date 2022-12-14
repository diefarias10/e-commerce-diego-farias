import React from "react";
import { Link } from "react-router-dom";
import './Item.css';

export default function Item({ item }) {

    return (

        <div className="itemCard">
            <h1>{item.title}</h1>
            <div>
                <img src={item.pictureUrl} alt="Foto juego" />
            </div>
            <Link to={'/item/' + item.id} className='itemBtn'> <button> Ver detalle</button></Link>

            <div className="itemStock">
                <p>Stock disponible: {item.stock}</p>
            </div>
        </div>

    );
}