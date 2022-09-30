import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import './ItemListContainer.css';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import LoadScreen from "./LoadScreen";


export default function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { idCategory } = useParams();

    useEffect(() => {
        setLoading(true)
        setProducts([])
        const db = getFirestore()

        const collectionRef = collection(db, 'products');

        getDocs(collectionRef).then((res) => {
            setLoading(false)
            const tidyProds = []

            res.docs.map((item) => {
                const tidyItem = { ...item.data(), id: item.id }
                tidyProds.push(tidyItem)
            })

            !idCategory ?
                setProducts(tidyProds) : setProducts(tidyProds.filter(element => element.category == idCategory))
        })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [idCategory]);

    return (

        <div style={{ height: '100vh' }}>
            {loading ?
                <LoadScreen show={loading} />
                : <ItemList items={products} />}
        </div>

    );
}