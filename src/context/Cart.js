import { useState, useContext, useRef } from 'react'
/* import './Cart.css' */
/* import ContactForm from '../ContactForm/ContactForm' */
import { CartContext } from './CartContext'
/* import CartItem from '../CartItem/CartItem' */
import { writeBatch, getDoc, doc, addDoc, collection, Timestamp } from 'firebase/firestore'
import { firestoredb } from '../services/firebase/firebase'
import { useNotificationServices } from '../services/notification/NotificationServices'

const Cart = () => {
    const [processingOrder, setProcessingOrder] = useState(false)
    /* const [contact, setContact] = useState({
        name: '',
        phone: '',
        address: '',
        comment: ''
    }) */
    const {cart, removeItem, getTotal, clearItem} = useContext(CartContext) 
    /* const contactFormRef = useRef() */

    const setNotification = useNotificationServices()

    const confirmOrder = () => {
        setProcessingOrder(true)
            
        const objOrder = {
                buyer: {
                    name: 'Nicolas',
                    phone: '1523134',
                    address:'allaby 124'
            
            },
                items: cart,
                total: getTotal(),
                date: Timestamp.fromDate(new Date())
            }

        const batch = writeBatch(firestoredb)
        const outOfStock = []

            objOrder.items.forEach(prod => {
                getDoc(doc(firestoredb, 'products', prod.id)).then(response => {
                    if(response.data().stock >= prod.quantity) {
                        batch.update(doc(firestoredb, 'products', response.id), {
                            stock: response.data().stock - prod.quantity
                        })
                    } else {
                        outOfStock.push({ id: response.id, ...response.data()})    
                    }
                })
            })

            if(outOfStock.length === 0) {
                addDoc(collection(firestoredb, 'orders'), objOrder).then(({id}) => {
                    batch.commit().then(() => {
                        clearItem()
                        setNotification('success', `La orden se genero exitosamente, su numero de orden es: ${id}`)
                    })
                }).catch(error => {
                    setNotification('error', error)
                }).finally(() => {
                    setProcessingOrder(false)
                })
            } else {
                outOfStock.forEach(prod => {
                    setNotification('error', `El producto ${prod.name} no tiene stock disponible`)
                    removeItem(prod.id)
                })          
            }
        } 
        
    if(processingOrder) {
        return <h1>Se esta procesando su orden</h1>
    }
    

    if (cart.length === 0){
        return <h1>No hay productos en el carrito</h1>
    }

    return ( 
        <div>
            <h1>Cart</h1>
            {cart.map((prod)=>(
                <li key={prod.id}> <img src={prod.img} ></img>{prod.cantidad} {prod.name} <button onClick={() => removeItem(prod.id)}>Borrar Producto</button></li>
            ))}
            <h3>Total: ${getTotal()}</h3>
            <button onClick={() => clearItem()} className="Button">Cancelar compra</button>
            <button onClick={() => confirmOrder()} className="Button">Confirmar Compra</button>
        
        </div>
       )
    }
export default Cart