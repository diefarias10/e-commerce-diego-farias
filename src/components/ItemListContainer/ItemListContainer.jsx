import React, { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "./ItemList/ItemList";



export default function ItemListContainer({ greeting }) {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('Golaaaaa')
        let productsPromise = new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve(
                    [
                        { id: '1', title: 'Catan', description: 'Descripcion del producto', price: 2500, pictureUrl: 'https://i.ibb.co/jk1ZV7b/catan.png' },
                        { id: '2', title: 'Bang!', description: 'Descripcion del producto', price: 2500, pictureUrl: 'https://i.ibb.co/3z40Rp7/Bang.png' },
                        { id: '3', title: 'Codigo Secreto', description: 'Descripcion del producto', price: 2500, pictureUrl: 'https://i.ibb.co/929Kjdv/Codigo-Secreto.png' },
                        { id: '4', title: 'Exploding Kittens', description: 'Descripcion del producto', price: 2500, pictureUrl: 'https://i.ibb.co/r7YcDF1/Exploding.png' },
                        { id: '5', title: 'King of Tokyo', description: 'Descripcion del producto', price: 2500, pictureUrl: 'https://i.ibb.co/R3yH0GC/King-Of-Tokyo.png' },
                        { id: '6', title: 'Monopoly', description: 'Descripcion del producto', price: 2500, pictureUrl: 'https://i.ibb.co/M6PqHYW/Monopoly.png' },
                        { id: '7', title: 'Uno!', description: 'Descripcion del producto', price: 2500, pictureUrl: 'https://i.ibb.co/sWxwH6f/Uno.png' },
                        { id: '8', title: 'Situacion Limite', description: 'Descripcion del producto', price: 2500, pictureUrl: 'https://i.ibb.co/Mcd3ryN/situacion-limite.png' },
                        { id: '9', title: 'Virus!', description: 'Descripcion del producto', price: 2500, pictureUrl: 'https://i.ibb.co/9HkC19W/virus.png' }
                    ]
                )
            }, 2000);
        });

        productsPromise.then((resolve) => {
            setProducts(resolve);
        })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [0]);


    const addItemCart = () => {
        //Logica de funcion para agregar item al carrito
        console.log("Item/s agregado/s correctamente!")
    }

    return (

        <div>
            <ItemCount initial={1} stock={10} onAdd={addItemCart} />
            <ItemList items={products} />
        </div>

    );
}