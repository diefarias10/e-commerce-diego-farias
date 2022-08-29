import React, { useState } from "react";
import '../ItemCount/ItemCount.css'

export default function ItemCount({ initial, stock, onAdd }) {

    const [count, setCount] = useState(initial);
    const [available, setAvailable] = useState(stock);

    const checkStock = () => {
    
        if (count <= available) {
            let rest = available - count;
            setAvailable(rest)
            onAdd()
            console.log("Quedan " + rest + " items en stock")
        }
    }

    return (

        <div className="counter">
            <p className="itemTitle">Juego de mesa</p>
            <div className="buttons">
                <button onClick={() => { count > 0 ? setCount(count - 1) : setCount(count) }}>--</button>
                <p>{count}</p>
                <button onClick={() => { count < stock ? setCount(count + 1) : setCount(count) }}>+</button>
            </div>
            <button className="btnAdd" onClick={checkStock}>Agregar al carrito</button>
        </div>
    );

}