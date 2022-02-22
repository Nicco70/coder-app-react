import { useEffect, useState } from 'react';
import { getItem } from '../asyncmock'
import ItemDetail from './ItemDetail'

    const ItemDetailContainer = () => {
        const [items, setProducts] = useState([]);
        const [loading, setLoading] = useState(true);
    
        useEffect(() => {
            getItem
                .then((resolve) => {
                    setProducts(resolve);
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    setLoading(false);
                });
        }, []);
    
        return (    
            <>
            {loading ? (
                <h1 style={{textalign: 'center'}}>Cargando...</h1>
            ) : (
                <>
                    <ItemDetail items={items} />
                </>
            )}
        </>
        );
    };
export default ItemDetailContainer