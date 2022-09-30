import React, { useState } from "react";
import './ItemCount.css'

export default function ItemCount({ initial, stock, onAdd }) {

    const [count, setCount] = useState(initial);
    const [available, setAvailable] = useState(stock);

    const checkStock = () => {

        if (count <= available) {
            let rest = available - count;
            setAvailable(rest)
            onAdd(count)
        }
    }

    return (

        <div className="counter">
            <div className="buttons">
                
                    <button className="counter-button" onClick={() => { count > 1 ? setCount(count - 1) : setCount(count) }}>-</button>
                    <p className="quantity">{count}</p>
                    <button className="counter-button" onClick={() => { count < stock ? setCount(count + 1) : setCount(count) }}>+</button>
            </div>
            <button className="btnAdd" onClick={checkStock}>Agregar al carrito</button>
        </div>
    );

}