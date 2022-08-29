import React, { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";


export default function ItemListContainer({ greeting }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    const addItemCart = () => {
        //Logica de funcion para agregar item al carrito
        console.log("Item/s agregado/s correctamente!")
    }

    return (

        <div>
            <ItemCount initial={1} stock={10} onAdd={addItemCart} />
        </div>

    );
}