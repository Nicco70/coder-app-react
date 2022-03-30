import { useState, useContext, useRef } from 'react'
/* import './Cart.css' */
import ContactForm from '../components/ContactForm'
import { CartContext } from './CartContext'
import Togglable from '../components/Togglable'
/* import CartItem from '../CartItem/CartItem' */
import { writeBatch, getDocs, addDoc, collection, Timestamp, where, query, documentId} from 'firebase/firestore'
import { firestoredb } from '../services/firebase/firebase'
import { useNotificationServices } from '../services/notification/NotificationServices'

const Cart = () => {
    const [processingOrder, setProcessingOrder] = useState(false)
    const [contact, setContact] = useState({
        name: '',
        phone: '',
        address: '',
        comment: ''
    })

    const {cart, removeItem, getTotal, clearItem} = useContext(CartContext) 
    const contactFormRef = useRef()

    const setNotification = useNotificationServices()

    const confirmOrder = () => {
        if(contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '') {
            setProcessingOrder(true)
            
            const objOrder = {
                buyer: contact,
                items: cart,
                total: getTotal(),
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(firestoredb)
            const outOfStock = []
            
            const ids = objOrder.items.map(i => i.id)

            getDocs(query(collection(firestoredb, 'products'),where(documentId(), 'in', ids)))
                .then(response => {
                    response.docs.forEach((docSnapshot) => {
                        if(docSnapshot.data().stock >= objOrder.items.find(prod => prod.id === docSnapshot.id).cantidad) {
                            batch.update(docSnapshot.ref, { stock: docSnapshot.data().stock - objOrder.items.find(prod => prod.id === docSnapshot.id).cantidad})
                        } else {
                            outOfStock.push({id: docSnapshot.id, ...docSnapshot.data()})
                        }
                    })
                }).then(() => {
                    if(outOfStock.length === 0) {
                        addDoc(collection(firestoredb, 'orders'), objOrder).then(({id}) => { 
                            batch.commit()
                            clearItem()
                            setNotification('success', `La orden se genero exitosamente, su numero de orden es: ${id}`)
                        })
                    } else {
                        outOfStock.forEach(prod => {
                            setNotification('error', `El producto ${prod.name} no tiene stock disponible`)
                            removeItem(prod.id)
                        })    
                    }               
                }).catch((error) => {
                    setNotification('error', error)
                }).finally(() => {
                    setProcessingOrder(false)
                })
            
        } else {
             setNotification('error', 'Debe completar los datos de contacto para generar la orden')
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
            {
                (contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '') &&
                
                    <div>
                        <h4>Nombre: {contact.name}</h4>
                        <h4>Telefono: {contact.phone}</h4>
                        <h4>Direccion: {contact.address}</h4>
                        <h4>Comentario: {contact.comment}</h4>
                        <button onClick={() => setContact({ phone: '', address: '', comment: ''})} 
                                className='Button' 
                                style={{backgroundColor: '#db4025'}}>
                            Borrar datos de contacto
                        </button>
                    </div>    
            }
            <Togglable buttonLabelShow={
                        (contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '') 
                            ? 'Editar contacto' 
                            : 'Agregar contacto'
                        } 
                        ref={contactFormRef}>
                <ContactForm toggleVisibility={contactFormRef} setContact={setContact} />
            </Togglable>          
        </div>
    )
}

export default Cart