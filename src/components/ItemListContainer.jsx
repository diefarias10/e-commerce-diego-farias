import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import './ItemListContainer.css';
import { getFirestore, collection, getDocs } from 'firebase/firestore';


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
                <div className="spinner">
                    <ClimbingBoxLoader color={'#DA0037'} loading={loading} cssOverride={''} size={15} />
                </div>
                : <ItemList items={products} />}
        </div>

    );
}