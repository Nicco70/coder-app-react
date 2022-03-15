import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
/* import { traerProducto } from '../asyncmock'; */
import ItemDetail from './ItemDetail';
import { getDoc, doc} from 'firebase/firestore'
import { firestoredb } from '../services/firebase/firebase';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true)

        const docRef = doc(firestoredb, 'products', itemId)

        getDoc(docRef).then(response => {
            const product = {id: response.id, ...response.data()}
            setProduct(product)
        }).finally(() => {
            setLoading(false)
        })


        return () => {
            setProduct([]);
        };
    }, [itemId]);

    return (
        <>{loading ? <h1>Cargando...</h1> : <ItemDetail product={product} />}</>
    );
};

export default ItemDetailContainer;