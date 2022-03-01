import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { traerProducto } from '../asyncmock';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
        traerProducto(itemId)
            .then((res) => {
                setProduct(res);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
        return () => {
            setProduct([]);
            setLoading(true);
        };
    }, [itemId]);

    return (
        <>{loading ? <h1>Cargando...</h1> : <ItemDetail product={product} />}</>
    );
};

export default ItemDetailContainer;