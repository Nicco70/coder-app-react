import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { traerProductos } from '../asyncmock';
import ItemList from './ItemList';

const ItemListContainer = ({ saludo }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        traerProductos(categoryId)
            .then((res) => {
                setProducts(res);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });

        return () => {
            setProducts([]);
            setLoading(true);
        };
    }, [categoryId]);

    return (
        <>
            {loading ? (
                <h1>Cargando...</h1>
            ) : (
                <>
                    <h1>{saludo}</h1>
                    <ItemList products={products} />
                </>
            )}
        </>
    );
};

export default ItemListContainer;