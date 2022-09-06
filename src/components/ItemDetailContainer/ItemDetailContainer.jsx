import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail/ItemDetail";


export default function ItemDetailContainer() {
    const [product, setProduct] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        let productPromise = new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve(
                    
                        { id: '2', title: 'Bang!', description: 'Descripcion del producto', price: 2500, pictureUrl: 'https://i.ibb.co/3z40Rp7/Bang.png' },
                    
                )
            }, 2000);
        });

        productPromise.then((resolve) => {
            setProduct(resolve);
        })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [0]);

    const getItem = () => {

        
    }

    return (
        <div>
            <ItemDetail item={product}/>
        </div>
    );
}