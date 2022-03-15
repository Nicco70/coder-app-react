import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
/* import { traerProductos } from '../asyncmock'; */
import ItemList from './ItemList';
import { getDocs, collection, query, where } from 'firebase/firestore'
import { firestoredb } from '../services/firebase/firebase';

const ItemListContainer = ({ saludo }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId ? 
            query(collection(firestoredb, 'products'), where('category', '==', categoryId)) : 
            collection(firestoredb, 'products')
       

        getDocs(collectionRef).then(response => {
            const products = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setProducts(products)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProducts([]);
        });
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