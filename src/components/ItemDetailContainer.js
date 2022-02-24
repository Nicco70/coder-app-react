import { useEffect, useState } from 'react';
import { getItem } from '../asyncmock'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import Item from './Item';

    const ItemDetailContainer = () => {
        const [items, setProducts] = useState([]);
        const {productId} = useParams()
    
        useEffect(() => {
            getItem(productId).then((resolve) => {
                    setProducts(resolve);
                })
                .catch((error) => {
                    console.log(error);
                })
        }, [productId]);
    
        return (    
                <>
                    {Item ? <ItemDetail items={items}/> : <h2> loading </h2>}
                </>
            )}

export default ItemDetailContainer