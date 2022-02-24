import { useEffect, useState } from 'react';
import { traerProductos } from './Products'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categorys} = useParams()

    useEffect(() => {
        traerProductos(categorys)
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
                    <h1>{greeting}</h1>
                    <ItemList products={products} />
                </>
            )}
        </>
    );
};

export default ItemListContainer;