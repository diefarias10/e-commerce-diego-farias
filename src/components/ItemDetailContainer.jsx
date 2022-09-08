import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


export default function ItemDetailContainer() {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const { idProduct } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {

        let productPromise = new Promise((resolve, reject) => {

            resolve(

                [
                    { id: '1', title: 'Catan', description: 'Descripcion del producto', price: 2500, category: 'Familiar', pictureUrl: 'https://i.ibb.co/jk1ZV7b/catan.png' },
                    { id: '2', title: 'Bang!', description: 'Descripcion del producto', price: 2500, category: 'Adultos', pictureUrl: 'https://i.ibb.co/3z40Rp7/Bang.png' },
                    { id: '3', title: 'Codigo Secreto', description: 'Descripcion del producto', price: 2500, category: 'Familiar', pictureUrl: 'https://i.ibb.co/929Kjdv/Codigo-Secreto.png' },
                    { id: '4', title: 'Exploding Kittens', description: 'Descripcion del producto', price: 2500, category: 'Adultos', pictureUrl: 'https://i.ibb.co/r7YcDF1/Exploding.png' },
                    { id: '5', title: 'King of Tokyo', description: 'Descripcion del producto', price: 2500, category: 'Niños', pictureUrl: 'https://i.ibb.co/R3yH0GC/King-Of-Tokyo.png' },
                    { id: '6', title: 'Monopoly', description: 'Descripcion del producto', price: 2500, categroy: 'Familiar', pictureUrl: 'https://i.ibb.co/M6PqHYW/Monopoly.png' },
                    { id: '7', title: 'Uno!', description: 'Descripcion del producto', price: 2500, category: 'Familiar', pictureUrl: 'https://i.ibb.co/sWxwH6f/Uno.png' },
                    { id: '8', title: 'Situacion Limite', description: 'Descripcion del producto', price: 2500, category: 'Adultos', pictureUrl: 'https://i.ibb.co/Mcd3ryN/situacion-limite.png' },
                    { id: '9', title: 'Virus!', description: 'Descripcion del producto', price: 2500, category: 'Niños', pictureUrl: 'https://i.ibb.co/9HkC19W/virus.png' }
                ]

            )
        });

        productPromise.then((resolve) => {

            let prod = resolve.find(element => element.id == idProduct)
            setProduct(prod)

        })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [idProduct]);

    /* const getItem = (prodid) => {
 
         
         let prod = products.find(p => p.id === prodid)
         console.log(prod)
         setProduct(prod);
 
     }*/

    return (
        <div>
            <ItemDetail item={product} />
        </div>
    );
}