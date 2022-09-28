import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { getFirestore, collection, doc, getDoc } from 'firebase/firestore';


export default function ItemDetailContainer() {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { idProduct } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {

        setLoading(true)
        const db = getFirestore()

        const productRef = doc(db, 'products', idProduct);

        getDoc(productRef).then((res) => {
            setLoading(false)
            const tidyProd = { ...res.data(), id: res.id }

            setProduct(tidyProd)

        })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [idProduct]);


    return (
        <div style={{ height: '100vh', display:'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {loading ?
                <div className="spinner">
                    <ClimbingBoxLoader color={'#DA0037'} loading={loading} cssOverride={''} size={15} />
                </div>
                : <ItemDetail item={product} />}
        </div>
    );
}