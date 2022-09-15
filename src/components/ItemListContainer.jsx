import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import './ItemListContainer.css';

const productsMock = [
    { id: '1', title: 'Catan', description: 'Descripcion del producto', price: 2500, category: 'Familiares', pictureUrl: 'https://i.ibb.co/jk1ZV7b/catan.png', stock: 10 },
    { id: '2', title: 'Bang!', description: 'Descripcion del producto', price: 2500, category: 'Adultos', pictureUrl: 'https://i.ibb.co/3z40Rp7/Bang.png', stock: 10 },
    { id: '3', title: 'Codigo Secreto', description: 'Descripcion del producto', price: 2500, category: 'Familiares', pictureUrl: 'https://i.ibb.co/929Kjdv/Codigo-Secreto.png', stock: 10 },
    { id: '4', title: 'Exploding Kittens', description: 'Descripcion del producto', price: 2500, category: 'Adultos', pictureUrl: 'https://i.ibb.co/r7YcDF1/Exploding.png', stock: 10 },
    { id: '5', title: 'King of Tokyo', description: 'Descripcion del producto', price: 2500, category: 'Niños', pictureUrl: 'https://i.ibb.co/R3yH0GC/King-Of-Tokyo.png', stock: 10 },
    { id: '6', title: 'Monopoly', description: 'Descripcion del producto', price: 2500, categroy: 'Familiares', pictureUrl: 'https://i.ibb.co/M6PqHYW/Monopoly.png', stock: 10 },
    { id: '7', title: 'Uno!', description: 'Descripcion del producto', price: 2500, category: 'Familiares', pictureUrl: 'https://i.ibb.co/sWxwH6f/Uno.png', stock: 10 },
    { id: '8', title: 'Situacion Limite', description: 'Descripcion del producto', price: 2500, category: 'Adultos', pictureUrl: 'https://i.ibb.co/Mcd3ryN/situacion-limite.png', stock: 10 },
    { id: '9', title: 'Virus!', description: 'Descripcion del producto', price: 2500, category: 'Niños', pictureUrl: 'https://i.ibb.co/9HkC19W/virus.png', stock: 10 }
]

export default function ItemListContainer({ greeting }) {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { idCategory } = useParams();

    useEffect(() => {
        setLoading(true)
        setProducts([])
        let productsPromise = new Promise((resolve, reject) => {

            setTimeout(() => {
                setLoading(false)
                resolve(
                    productsMock
                )
            }, 2000);
        });

        productsPromise.then((resolve) => {
            !idCategory ? setProducts(resolve) : setProducts(resolve.filter(element => element.category == idCategory));
        })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [idCategory]);


    const addItemCart = () => {
        //Logica de funcion para agregar item al carrito
        console.log("Item/s agregado/s correctamente!")
    }

    return (

        <div style={{ height: '100vh' }}>
            {loading ?
                <div className="spinner">
                    <ClimbingBoxLoader color={'#DA0037'} loading={loading} cssOverride={''} size={15} />
                </div>
                : <ItemList items={products} />}
        </div>

    );
}